// metadataProperties.js
export const ROCrateProperties = [
  { name: "Name", key: "name" },
  { name: "Persistent Identifier", key: "@id" },
  { name: "Description", key: "description" },
  { name: "Source Organization", key: "sourceOrganization" },
  { name: "Contains", key: "@graph" },
  { name: "Distributions", key: "distribution" },
];

export const DatasetProperties = [
  { name: "Name", key: "name" },
  { name: "Persistent Identifier", key: "@id" },
  { name: "Description", key: "description" },
  { name: "Author", key: "author" },
  { name: "Owner", key: "owner" },
  { name: "Generated By", key: "generatedBy" },
  { name: "Date Published", key: "datePublished" },
  { name: "Keywords", key: "keywords" },
  { name: "Distributions", key: "distribution" },
];

export const ComputationProperties = [
  { name: "Name", key: "name" },
  { name: "Persistent Identifier", key: "@id" },
  { name: "Description", key: "description" },
  { name: "Author", key: "author" },
  { name: "Owner", key: "owner" },
  { name: "Used Datasets", key: "usedDataset" },
  { name: "Used Software", key: "usedSoftware" },
  { name: "Keywords", key: "keywords" },
];

export const SoftwareProperties = [
  { name: "Name", key: "title" },
  { name: "Persistent Identifier", key: "@id" },
  { name: "Description", key: "description" },
  { name: "Author", key: "author" },
  { name: "Used By", key: "usedBy" },
  { name: "Date Published", key: "datePublished" },
  { name: "Keywords", key: "keywords" },
  { name: "Distributions", key: "distribution" },
];

export const SchemaProperties = [
  { name: "Name", key: "name" },
  { name: "Description", key: "description" },
  { name: "Persistent Identifier", key: "@id" },
  { name: "Properties", key: "properties" },
  { name: "Author", key: "author" },
  { name: "License", key: "license" },
];