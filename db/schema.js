import { schemaComposer } from 'graphql-compose';
import { composeMongoose } from 'graphql-compose-mongoose';
import Ogre from './models/Ogre';
import Rogue from './models/Rogue';
import Orc from './models/Orc';
import Shaman from './models/Shaman';

const customizationOptions = {}; // left it empty for simplicity, described below
const OrcTC = composeMongoose(Orc, customizationOptions);
const ShamanTC = composeMongoose(Shaman, customizationOptions);
const OgreTC = composeMongoose(Ogre, customizationOptions);
const RogueTC = composeMongoose(Rogue, customizationOptions);

schemaComposer.Query.addFields({
  orc: OrcTC.mongooseResolvers.findOne(),
  orcs: OrcTC.mongooseResolvers.findMany({
    limit: {
      defaultValue: 1000,
    },
  }),
  shaman: ShamanTC.mongooseResolvers.findOne(),
  shamans: ShamanTC.mongooseResolvers.findMany({
    limit: {
      defaultValue: 1000,
    },
  }),
  ogre: OgreTC.mongooseResolvers.findOne(),
  ogres: OgreTC.mongooseResolvers.findMany({
    limit: {
      defaultValue: 1000,
    },
  }),
  rogue: RogueTC.mongooseResolvers.findOne(),
  rogues: RogueTC.mongooseResolvers.findMany({
    limit: {
      defaultValue: 1000,
    },
  }),
});

const schema = schemaComposer.buildSchema();

export default schema;
