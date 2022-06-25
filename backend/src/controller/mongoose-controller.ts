/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { nextTick } from 'process';
import { iRobot } from '../models/robots-model';

export class MongooseController<T> {
    constructor(public model: Model<T>) {}

    getAllController = async (req: Request, resp: Response) => {
        req;
        resp.setHeader('Content-type', 'application/json');
        resp.end(JSON.stringify(await this.model.find()));
    };

    getController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            resp.setHeader('Content-type', 'application/json');
            if (req.params.id.length !== 24) {
                resp.status(404);
                resp.end(JSON.stringify({}));
                throw new Error('Id not found');
            }
            const result = await this.model.findById(req.params.id);
            if (!result) {
                resp.status(404);
                resp.end(JSON.stringify({}));

                throw new Error('Id not found');
            } else {
                resp.end(JSON.stringify(result));
            }
        } catch (err) {
            next(err);
        }
    };

    postController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            const newItem = await this.model.create(req.body);
            if (!newItem) throw new Error('404');
            resp.setHeader('Content-type', 'application/json');
            resp.status(201);
            resp.end(JSON.stringify(newItem));
        } catch (err) {
            next(err);
        }
    };

    patchController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            if (
                (!req.body.name as Partial<iRobot>) ||
                ((req.body.speed > 10) as Partial<iRobot>)
            ) {
                resp.end(JSON.stringify({}));
                throw new Error('404');
            } else {
                const newItem = await this.model.findByIdAndUpdate(
                    req.params.id,
                    req.body
                );
                resp.setHeader('Content-type', 'application/json');
                resp.end(JSON.stringify(newItem));
            }
        } catch (error) {
            next(error);
        }
    };

    deleteController = async (req: Request, resp: Response) => {
        const deletedItem = await this.model.findByIdAndDelete(req.params.id);
        resp.status(404);
        resp.end(JSON.stringify(deletedItem));
    };
}
