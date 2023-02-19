import { Content, ContentModel } from "./Content";
import { Taxonomy, TaxonomyModel } from "./Taxonomy";
import { Setting } from './Setting';

ContentModel.belongsToMany(TaxonomyModel, { through: 'ContentTaxonomy' });
TaxonomyModel.belongsToMany(ContentModel, { through: 'ContentTaxonomy' });

export { Content, Taxonomy, Setting }