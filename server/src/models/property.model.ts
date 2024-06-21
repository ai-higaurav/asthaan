import mongoose, { Schema, Document, Types } from 'mongoose';

// Enum types
enum ListingType {
  SALE = 'SALE',
  RENT = 'RENT',
  LEASE = 'LEASE',
}

enum PropertyType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
  VILLA = 'VILLA',
  COMMERCIAL_SPACE = 'COMMERCIAL_SPACE',
}

enum BuildingType {
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  MIXED_USE = 'MIXED_USE',
}

enum FurnishedStatus {
  FURNISHED = 'FURNISHED',
  SEMI_FURNISHED = 'SEMI_FURNISHED',
  UNFURNISHED = 'UNFURNISHED',
}

enum PossessionStatus {
  READY_TO_MOVE = 'READY_TO_MOVE',
  UNDER_CONSTRUCTION = 'UNDER_CONSTRUCTION',
}



// Interface for Property document
interface IProperty extends Document {
  listingType: ListingType;
  propertyType: PropertyType;
  buildingType: BuildingType;
  furnishedStatus: FurnishedStatus;
  propertyAge: number;
  possessionStatus: PossessionStatus;
  unitNo?: number;
  rooms: number;
  bathroom: number;
  view?: string;
  area: number;
  price: number;
  city: string;
  locality: string;
  totalFloors?: number;
  floorNo?: number;
  balconyType?: 'none' | 'open' | 'covered';
  amenities?: ('swimming pool' | 'gym' | 'park' | 'security' | 'playground' | 'club house')[];
  waterSource?: 'municipal corporation' | 'borewell' | 'tank';
  facingDirection?: 'north' | 'south' | 'east' | 'west' | 'north-east' | 'north-west' | 'south-east' | 'south-west';
  additionalDetails?: string;
  images: string[];
  seller: Types.ObjectId ;
  isApproved: boolean;
  status: 'active' | 'sold';
}

// Property schema
const propertySchema: Schema<IProperty> = new mongoose.Schema({
  listingType: { type: String, required: true, enum: Object.values(ListingType) },
  propertyType: { type: String, required: true, enum: Object.values(PropertyType) },
  buildingType: { type: String, required: true, enum: Object.values(BuildingType) },
  furnishedStatus: { type: String, required: true, enum: Object.values(FurnishedStatus), default: FurnishedStatus.UNFURNISHED },
  propertyAge: { type: Number, required: true, min: 1 },
  possessionStatus: { type: String, required: true, enum: Object.values(PossessionStatus) },
  unitNo: { type: Number },
  rooms: { type: Number, required: true, min: 1 },
  bathroom: { type: Number, required: true, min: 1 },
  view: { type: String },
  area: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 },
  city: { type: String, required: true },
  locality: { type: String, required: true },
  totalFloors: { type: Number, min: 1 },
  floorNo: { type: Number, min: 1 },
  balconyType: { type: String, enum: ['none', 'open', 'covered'] },
  amenities: { type: [{ type: String, enum: ['swimming pool', 'gym', 'park', 'security', 'playground', 'club house'] }] },
  waterSource: { type: String, enum: ['municipal corporation', 'borewell', 'tank'] },
  facingDirection: { type: String, enum: ['north', 'south', 'east', 'west', 'north-east', 'north-west', 'south-east', 'south-west'] },
  additionalDetails: { type: String },
  images: { type: [String], required: true },
  seller: { type: Schema.Types.ObjectId, ref:'User' , required: true },
  isApproved: { type: Boolean, required: true, default: false },
  status: { type: String, required: true, enum: ['active', 'sold'], default: 'active' },
}, {
  timestamps: true,
});

// Create Property model
const Property = mongoose.model<IProperty>('Property', propertySchema, 'property');

export default Property;