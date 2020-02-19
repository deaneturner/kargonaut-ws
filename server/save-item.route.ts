import {Request, Response} from 'express';
import { ITEMS } from './db-data';


export function saveItem(req: Request, res: Response) {

    const id = req.params.id;
    const changes = req.body;

    ITEMS[id] = {
        ...ITEMS[id],
        ...changes
    };

    setTimeout(() => {

        res.status(200).json(ITEMS[id]);

    }, 2000);

}

