import { z } from 'zod';

const listingTypeOptions = ['sale', 'rent', 'lease'];
const propertyTypeOptions=['apartment', 'house', 'villa', 'commercial space'];
const buildingTypeOptions=['residential', 'commercial', 'mixed-use'];
const possessionStatusOptions=["ready to move"," under construction"];
const balconyTypeOptions=['none', 'open', 'covered']
const amenitiesOptions=['swimming pool', 'gym', 'park', 'security', 'playground', 'club house']
const waterSourceOptons=['municipal corporation', 'borewell', 'tank']
const facingDirectionOptions=['north', 'south', 'east', 'west', 'north-east', 'north-west', 'south-east', 'south-west']
const furnishedStatusOptions=['furnished','semi-furnished','unfurnished']



const propertyVal = z.object({
  listingType: z
    .string({
      required_error: "Listing type is required!",
      invalid_type_error: "Listing type must be a string",
    })
    .transform((val)=> val.toLocaleLowerCase())
    .refine((val) => listingTypeOptions.includes(val), {
      message: "Invalid listing type. Must be 'Sale', 'Rent', or 'Lease'.",
    }),

  propertyType: z.string({
    required_error: "Property type is required!",
    invalid_type_error: "Property type must be a string",
  })
  .transform((val)=> val.toLocaleLowerCase())
  .refine((val) => propertyTypeOptions.includes(val), {
    message: "Invalid Property type. Must be 'apartment', 'house', 'villa' , 'commercial space'.",
  }),

  buildingType:z
  .string({
    required_error:'Building type is required',
    invalid_type_error:'Building type must be a string'
  })
  .transform((val)=> val.toLowerCase())
  .refine(val => buildingTypeOptions.includes(val),{
    message:"Invalid building type. Must be 'residential', 'commercial'" 
  }),

  furnishedStatus:z
  .string({
    required_error:'Furnished type is required',
    invalid_type_error:'Furnished type must be a string'
  })
  .transform((val)=> val.toLowerCase())
  .refine(val => furnishedStatusOptions.includes(val),{
    message:"Invalid furnished type. Must be 'furnished', 'semi-furnished','unfurnished'" 
  }),

  propertyAge:z
  .number({
    required_error:'Property age is required',
    invalid_type_error:'Property age must be  number'
  })
  .min(1,"Minimum age property must a 0-1")
  .max(100, "Maximum age property is 100 years"),

  totalFloors:z
  .number({
    required_error:'Total No of floor is  required',
    invalid_type_error:'Total Floor must be a number'
  })
  .min(1,"Floor must be more than zero")
  .max(100, "Maximum floor is 100"),

  floorNo:z
  .number({
    required_error:'Floor No  is  required',
    invalid_type_error:'Floor must be a number'
  })
  .min(1,"Floor must be more than zero")
  .max(100, "Maximum floor is 100"),

  possessionStatus:z
  .string({
    required_error:'Possession is required',
    invalid_type_error:'Possession must be a string'
  })
  .transform(val=> val.toLowerCase())
  .refine(val => possessionStatusOptions.includes(val),{
    message:"Possession status must be 'ready to move or under construction"
  }),

  unitNo:z
  .number({
    invalid_type_error:'Unit number must be a number',
    required_error:'unit number is required'
  })
  .min(0,"Minimum Unit is required"),

  rooms:z
  .number({
    required_error:'No of rooms is required',
    invalid_type_error:'No of rooms must be a number'
  }),

  bathroom:z
  .number({
    required_error:'No of bathroom is required',
    invalid_type_error:'No of bathroom must be a number'
  }),

  view:z
  .string({
    required_error:'Property view is required',
    invalid_type_error:'Property view must be a string'
  }),

  area:z
  .number({
    required_error:'area is required',
    invalid_type_error:'area must be a number'
  }),

  price:z
  .number({
    required_error:'price is required',
    invalid_type_error:'price  must be a number'
  }),

  city:z
  .string({
    required_error:'city is required',
    invalid_type_error:'city must be a string'
  }),

  locality:z
  .string({
    required_error:'locality is required',
    invalid_type_error:'locality must be a string'
  }),

  balconyType:z
  .string({
    required_error:'Balcony type is required',
    invalid_type_error:'Balcony type must be a string'
  })
  .transform(val=> val.toLowerCase())
  .refine(val => balconyTypeOptions.includes(val),{
    message:"Balconoy type must be 'none, open or covered"
  }),

  amenities: z.array(
    z.string({
        required_error: 'At least one amenity is required',
        invalid_type_error: 'Each amenity must be a string'
    })
    .transform(val => val.toLowerCase())
    .refine(val => amenitiesOptions.includes(val), {
        message: "Each amenity must be one of the following: 'swimming pool', 'gym', 'park', 'security', 'playground', 'club house'"
    })
),

  waterSource:z
  .string({
    required_error:'Water source  is required',
    invalid_type_error:'Water souce  must be a string'
  })
  .transform(val=> val.toLowerCase())
  .refine(val => waterSourceOptons.includes(val),{
    message:"Water Souce  must be 'borewell , tank etc.."
  }),

  facingDirection:z
  .string({
    required_error:'FaciFacing direction must be a string'
  })
  .transform(val=> val.toLowerCase())
  .refine(val => facingDirectionOptions.includes(val),{
    message:"Facing direction  must be 'east, west etc.."
  }),

  additionalDetails:z
  .string({
    required_error:'Property discription is required',
    invalid_type_error:'Property must be a string'
  }),

  seller:z
  .string({
    invalid_type_error:'Seller must be a string',
    required_error:'Seller id is required'
  })  

});

export default propertyVal;