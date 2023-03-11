import { Request, Response } from "express";
import { IRealEstate } from "../interfaces/realEstates.interfaces";
import createRealEstateService from "../services/realEstates/createRealEstate.service";
import listRealEstatesService from "../services/realEstates/listRealEstates.service";

const createRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateData: IRealEstate = req.body;

    const newRealEstate = await createRealEstateService(realEstateData);

    return res.status(201).json(newRealEstate);
};

const listRealEstatesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstates = await listRealEstatesService();

    return res.json(realEstates);
};

export { createRealEstateController, listRealEstatesController };
