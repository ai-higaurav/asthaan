import mongoose ,{Document , Schema , Types} from "mongoose";

enum listingType {
  sale="sale"
}

enum propertyType{
  apartment="apartment",
  house="house",
  villa="villa"
}

enum buildingType{
  residential="residential",
  commercial="commercial",
}

enum furnishedStatus{
  furnished="furnished",
  semi_furnished="semi furnished",
  full_furnished="full furnished"
}

enum possessionStatus{
  ready_to_move="ready to move",
  under_constraction="under constraction"
}

interface IProperty extends Document {
  listingType:listingType 
  propertyType:propertyType
  buildingType:buildingType
  furnishedStatus:furnishedStatus
  possessionStatus:possessionStatus
  propertyAge:number
  unitNo:number
  rooms:number
  bathroom:number
  area:number
  price:number
  totalFloors?:number
  floorNo?:number
  balconyType ?:"none" | "covered" | "open"
  amenities:[string]
  waterSource:'municipal corporation' | 'borewell' | 'tank';
  facingDirection:'north' | 'south' | 'east' | 'west' | 'north-east' | 'north-west' | 'south-east' | 'south-west'
  additionalDetails:string
  images:[string]
  status:"active" | "sold"
  isVerified:boolean
  state:string,
  city:string
  locality:string
  pinCode:number
  seller :Types.ObjectId

}

const propertySchema : Schema <IProperty> = new mongoose.Schema({

  listingType:{
    type:String,
    enum:Object.values(listingType),
    required:true
    },
  
  propertyType:{
    type:String,
    enum:Object.values(propertyType),
    required:true,
  },

  buildingType:{
    type:String,
    enum:Object.values(buildingType)
  },

  furnishedStatus:{
    type:String,
    enum:Object.values(furnishedStatus),
    required:true
  },

  possessionStatus:{
    type:String,
    enum:Object.values(possessionStatus),
    required:true
  },

  propertyAge:{
    type:Number,
    required:true
  },

  unitNo:{
    type:Number,
    required:true
  },

  rooms:{
    type:Number,
    required:true
  },

  bathroom:{
    type:Number,
    required:true
  },
  area:{
    type:Number,
    required:true
  },
  
  price:{
    type:Number,
    required:true
  },

  totalFloors:{
    type:Number,
    required:true
  },

  floorNo:{
    type:Number
  },

  balconyType:{
    type:String,
    enum:["none","covered","open"],
    default:"none",
    required:true
  },

 amenities:{
  type:[{type:String}],
  default:[],
  required:true
 },

 waterSource:{
  type:String,
  enum:['municipal corporation' , 'borewell' , 'tank'],
  default:"municipal corporation",
  required:true
 },

 facingDirection: { 
  type: String,
  enum: ['north', 'south', 'east', 'west', 'north-east', 'north-west', 'south-east', 'south-west']
 },

 additionalDetails:{
  type:String,
  required:true
 },

 images:{
  type:[String],
  default:[]
 },

 status:{
  type:String,
  required:true,
  enum:["active", "sold"],
  default:"active"
 },

 isVerified:{
  type:Boolean,
  required:true,
  default:false
 },

 state:{
  type:String,
  required:true
 },

 city:{
  type:String,
  required:true
 },

 locality:{
  type:String,
  required:true
 },

 pinCode:{
  type:Number,
  required:true
 },

 seller:{
  type:Schema.Types.ObjectId,
  ref:"Users"
 }

},
{
  timestamps:true
}
)

const Property = mongoose.model<IProperty>('Property', propertySchema , 'Properties')

export default Property;