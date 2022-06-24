import { Request, Response } from 'express';
import { MongooseController } from './mongoose-controller';

import mongoose from 'mongoose';

describe('Given a instantiated controller MongooseController', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let mockModel = {
        find: jest.fn(),
    };
    let controller = new MongooseController(
        mockModel as unknown as mongoose.Model<{}>
    );

    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
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

    // describe('When method getController is called', () => {
    //     test('And response is ok, then resp.end should be called with data', async () => {
    //         const result = { test: 'test' };
    //         dataModel.find = jest.fn().mockResolvedValue(result);
    //         await dataController.getController(
    //             req as Request,
    //             resp as Response
    //         );
    //         expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
    //     });
    //     test('And response is not ok, then resp.end should be called without data', async () => {
    //         const result = null;
    //         dataModel.find = jest.fn().mockResolvedValue(result);
    //         await dataController.getController(
    //             req as Request,
    //             resp as Response
    //         );
    //         expect(resp.end).toHaveBeenCalledWith(JSON.stringify({}));
    //         expect(resp.status).toHaveBeenCalledWith(404);
    //     });
    // });

    // describe('When method postController is called', () => {
    //     test('Then resp.end should be called with data', async () => {
    //         const result = { test: 'test' };
    //         dataModel.create = jest.fn().mockResolvedValue(result);
    //         await dataController.postController(
    //             req as Request,
    //             resp as Response
    //         );
    //         expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
    //     });
    // });

    // describe('When method patchController is called', () => {
    //     test('Then resp.end should be called with data', async () => {
    //         const result = { test: 'test' };
    //         dataModel.update = jest.fn().mockResolvedValue(result);
    //         await dataController.patchController(
    //             req as Request,
    //             resp as Response
    //         );
    //         expect(resp.end).toHaveBeenCalledWith(JSON.stringify(result));
    //     });
    // });

    // describe('When method deleteController is called', () => {
    //     test('Then res.status should be called with status', async () => {
    //         const result = { status: 202 };
    //         dataModel.delete = jest.fn().mockResolvedValue(result);
    //         await dataController.deleteController(
    //             req as Request,
    //             resp as Response
    //         );
    //         expect(resp.status).toHaveBeenCalledWith(202);
    //     });
    // });
});
