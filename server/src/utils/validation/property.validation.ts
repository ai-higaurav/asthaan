import mongoose from 'mongoose';
import {z} from 'zod'

const listingTypeEnum = ["sale"];

const propertyTypeEnum = ["apartment", "house", "villa"];

const buildingTypeEnum = ["residential", "commercial"];

const furnishedStatusEnum = ["furnished", "semi furnished", "full furnished"];

const possessionStatusEnum =["ready to move", "under constraction"];

const waterSourceEnum = ['municipal corporation', 'borewell', 'tank'];

const facingDirectionEnum = ['north', 'south', 'east', 'west', 'north-east', 'north-west', 'south-east', 'south-west'];

const balconyTypeEnum = ["open","closed","covered"]

const amenitiesEnum=['swimming pool', 'gym', 'park', 'security', 'playground', 'club house']

// const statusEnum = ["active", "sold"];

const propertyVal = z.object({
    listingType:z
    .string({
        required_error:"Listing type is required",
        invalid_type_error:"Listing type must be a string"
    })
    .transform((val)=> val.toLowerCase())
    .refine((val)=> listingTypeEnum.includes(val),{message:"Invalid listing type. Must be 'Sale'. "}),

    propertyType:z
    .string({
        required_error:"Property type is required",
        invalid_type_error:"Property type must be a string"
    })
    .transform((val)=> val.toLowerCase())
    .refine((val)=> propertyTypeEnum.includes(val),{message:"Invalid property type. Must be apartment , house or villa "}),

    buildingType:z
    .string({
        required_error:"Building type is required",
        invalid_type_error:"Building type must be a string"
    })
    .transform((val)=> val.toLowerCase())
    .refine((val)=> buildingTypeEnum.includes(val),{message:"Invalid building type. Must be residential or commercial"}),

    furnishedStatus:z
    .string({
        required_error:"Furnished status is required",
        invalid_type_error:"Furnished status must be a string"
    })
    .transform((val)=> val.toLowerCase())
    .refine((val)=> furnishedStatusEnum.includes(val),{message:"Invalid furnished status be furnished , semi-furnished or full furnished"}),

    possessionStatus:z
    .string({
        required_error:"Possession status is required",
        invalid_type_error:"Possession status must be a string"
    })
    .transform((val)=> val.toLowerCase())
    .refine((val)=> possessionStatusEnum.includes(val),{message:"Possession must be ready to move or under constraction"}),

    waterSource:z
    .string({
        required_error:"Water source is required",
        invalid_type_error:"Water source must be a string"
    })
    .transform((val)=> val.toLowerCase())
    .refine((val)=> waterSourceEnum.includes(val),{message:"Water source must be muncipal , borewell or tank"}),

   facingDirection:z
   .string({
    required_error:"Facing direction is required",
    invalid_type_error:"Facing direction must be a string"
   })
   .transform((val)=> val.toLowerCase())
   .refine((val)=> facingDirectionEnum.includes(val),{message:"Facing direction must be valid"}),

  propertyAge:z
  .number({
    required_error:"Property age is required",
    invalid_type_error:"Property age must be a number"
  })
  .min(1, "Property number must be 1 if 0-1 years old")
  .max(100, "Property maximum age is 100 years"),

  unitNo:z
  .number({
    required_error:"Unit number  is required",
    invalid_type_error:"Unit Number  must be a number"
  })
  .min(1, "Minimum unit should be 1")
  .max(100, "Maximum unit limit is 50"),

  rooms:z
  .number({
    required_error:"No of rooms  is required",
    invalid_type_error:"No of rooms  must be a number"
  })
  .min(1, "Minimum 1 room is required")
  .max(100, "Maximum room limit is 100"),

  bathroom:z
  .number({
    required_error:"No of bathroom is required",
    invalid_type_error:"No of bathroom  must be a number"
  })
  .min(1, "Minimum 1 bathroom is required")
  .max(100, "Maximum bathroom limit is 100"),

  area:z
  .number({
    required_error:"Area is required",
    invalid_type_error:"Area must be a number"
  })
  .min(1, "Minimum 1 SqFt. area is required")
  .max(100, "Maximum SqFt. area is 1000 SqFt."),

  price:z
  .number({
    required_error:"Price is required",
    invalid_type_error:"Price must be a number"
  })
  .min(1, "Price must be more than 1 Rs")
  .max(10000000 , "Maximum price limit is 1 Cr"),

  totalFloor:z
  .number({
    required_error:"Total no of is required",
    invalid_type_error:"Total no of floor must be a number"
  })
  .min(1, "Minimum 1 floor is required")
  .max(100, "Maximum floor limit is 100"),

  balconyType:z
  .string({
    required_error:"Balcony type is required",
    invalid_type_error:"Balcony must be a string"
  })
  .transform((val)=> val.toLowerCase())
  .refine((val)=> balconyTypeEnum.includes(val),{message:"Balcony must be open , covered or none"}),

  amenities: z.array(
    z.string({
        required_error: 'At least one amenity is required',
        invalid_type_error: 'Each amenity must be a string'
    })
    .transform(val => val.toLowerCase())
    .refine(val => amenitiesEnum.includes(val), {
        message: "Each amenity must be one of the following: 'swimming pool', 'gym', 'park', 'security', 'playground', 'club house'"
    })),

  additionalDetails:z
  .string({
    required_error:'Property discription is required',
    invalid_type_error:'Property discription must be a string'
  }),

  state:z
  .string({
    required_error:'State is required',
    invalid_type_error:"State must be a string",
  })
  .transform((val)=> val.toLowerCase()),

  city:z
  .string({
    required_error:'City is required',
    invalid_type_error:"City must be a string"
  })
  .transform((val)=> val.toLowerCase()),

  locality:z
  .string({
    required_error:'Locality is required',
    invalid_type_error:"Locality must be a string"
  })
  .transform((val)=> val.toLowerCase()),

  pinCode:z
  .number({
    required_error:'Pincode is required',
    invalid_type_error:"Pincode must be a number"
  })
  .int()
  .gte(100000)
  .lte(999999)
  .refine((val)=> /^\d{6}$/g.test(val.toString()),{message:"Pin code must be 6 digit"}),

//   seller:z
//   .string({
//     required_error:'Seller id is required',
//     invalid_type_error:"Seller id must a valid object id"
//   })
//   .refine((id)=>mongoose.Types.ObjectId.isValid(id),{message:"Seller id must be a valid id"})

})


export default propertyVal;