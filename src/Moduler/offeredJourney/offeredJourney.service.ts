import httpStatus from 'http-status';
import AppError from '../../Error/AppError';
import { driverModel } from '../Member/member.model';
import { TofferedJourney } from './offeredJourney.interface';
import busModel from '../Bus/bus.model';
import { offeredJourneyModel } from './offeredJourney.model';

const createOfferedJourneyIntoDB = async (payload: TofferedJourney) => {
  const { driver, bus, date } = payload;

  const isDriverExists = await driverModel.findById(driver);
  if (!isDriverExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Driver is not found');
  }

  const isBusExists = await busModel.findById(bus);
  if (!isBusExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Bus is not found');
  }

  payload.capacity = isBusExists.capacity;
  payload.slot = isBusExists.slot;

  const isBusAndDateConflict = await offeredJourneyModel.findOne({ bus, date });
  if (isBusAndDateConflict) {
    throw new AppError(httpStatus.CONFLICT, 'This Bus has trip on this date');
  }

  const isDriverAndDateConflict = await offeredJourneyModel.findOne({
    driver,
    date,
  });
  if (isDriverAndDateConflict) {
    throw new AppError(
      httpStatus.CONFLICT,
      'This Driver has trip on this date',
    );
  }

  const result = await offeredJourneyModel.create(payload);

  return result;
};

const getAllOfferedJourneyFromDB = async (query: Record<string, unknown>) => {

  if (Object.keys(query).length !== 3) {
    throw new AppError(httpStatus.BAD_REQUEST, "Provider your destination")
  }

  const from = query.from
  const date = query.date
  const stops = query.stops

  console.log(stops);


  const result = await offeredJourneyModel
    .find({
      from,
      date,
      stops: { $in: stops }
    })
    .populate({ path: 'driver', select: 'id name email contactNo -_id' })
    .populate({ path: 'bus', select: 'companyName no capacity -_id' });

  return result;

};

const deleteOfferedJourneyFromDB = async (id: string) => {
  const result = await offeredJourneyModel.findByIdAndDelete(id);
  return result;
};

export const offeredJourneyService = {
  createOfferedJourneyIntoDB,
  getAllOfferedJourneyFromDB,
  deleteOfferedJourneyFromDB,
};
