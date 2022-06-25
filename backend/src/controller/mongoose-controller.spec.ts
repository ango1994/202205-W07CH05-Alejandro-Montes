import { NextFunction, Request, Response } from 'express';
import { MongooseController } from './mongoose-controller';

import mongoose from 'mongoose';

describe('Given a instantiated controller MongooseController', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let next: NextFunction = jest.fn();
    let mockModel = {
        find: jest.fn(),
        findById: jest.fn(),
        create: jest.fn(),
        findByIdAndUpdate: jest.fn(),
        findByIdAndDelete: jest.fn(),
    };
    let controller = new MongooseController(
        mockModel as unknown as mongoose.Model<{}>
    );

    beforeEach(() => {
        req = {
            params: { id: '62b6e27ee58ac1d9d95681b2' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
        next;
    });
    describe('When method getAllController is called', () => {
        test('Then resp.end should be called', async () => {
            const mockResult = <any>[];
            (mockModel.find as jest.Mock).mockResolvedValue(mockResult);
            await controller.getAllController(req as Request, resp as Response);
            expect(resp.setHeader).toHaveBeenCalled();
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });

    describe('When method getController is called', () => {
        test('And response is ok, then resp.end should be called with data', async () => {
            (mockModel.findById as jest.Mock).mockResolvedValue({});
            await controller.getController(
                req as Request,
                resp as Response,
                next
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify({}));
        });
        test('And response is not ok, then resp.end should be called without data', async () => {
            (mockModel.findById as jest.Mock).mockResolvedValue(undefined);
            await controller.getController(
                req as Request,
                resp as Response,
                next
            );

            expect(resp.end).toHaveBeenCalledWith(JSON.stringify({}));
            expect(resp.status).toHaveBeenCalledWith(404);
            expect(next).toHaveBeenCalled();
        });
        test('And response is not ok, then resp.end should be called without data', async () => {
            req = {
                params: { id: '62b6e27ee58ac' },
            };
            (mockModel.findById as jest.Mock).mockResolvedValue(undefined);
            await controller.getController(
                req as Request,
                resp as Response,
                next
            );

            expect(resp.end).toHaveBeenCalledWith(JSON.stringify({}));
            expect(resp.status).toHaveBeenCalledWith(404);
            expect(next).toHaveBeenCalled();
        });
    });

    describe('When method postController is called', () => {
        test('Then resp.end should be called with data', async () => {
            const result = { test: 'test' };
            mockModel.create = jest.fn().mockResolvedValue(result);
            await controller.postController(
                req as Request,
                resp as Response,
                next
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
        });
    });

    describe('When method postController is called with invalid values', () => {
        test('Then resp.end should be called with data', async () => {
            //  const result = { test: 'test' };
            mockModel.create = jest.fn().mockResolvedValue(null);
            await controller.postController(
                req as Request,
                resp as Response,
                next
            );
            expect(next).toHaveBeenCalled();
        });
    });

    describe('When method patchController is called', () => {
        test('Then resp.end should be called with data', async () => {
            const result = { test: 'test' };
            mockModel.findByIdAndUpdate = jest.fn().mockResolvedValue(result);
            await controller.patchController(
                req as Request,
                resp as Response,
                next
            );
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
            expect(mockModel.findByIdAndUpdate).toHaveBeenCalled();
        });
    });

    describe('When method deleteController is called', () => {
        test('Then res.status should be called with status', async () => {
            const result = { status: 404 };
            mockModel.findByIdAndDelete = jest.fn().mockResolvedValue(result);
            await controller.deleteController(req as Request, resp as Response);
            expect(resp.status).toHaveBeenCalledWith(result.status);
        });
    });
});
