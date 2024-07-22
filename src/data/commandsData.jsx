const commands = {
  rocrate: {
    create: {
      create: {
        options: [
          "guid",
          "name",
          "organization-name",
          "project-name",
          "description",
          "keywords",
        ],
        required: [
          "name",
          "organization-name",
          "project-name",
          "description",
          "keywords",
        ],
      },
    },
    add: {
      dataset: {
        options: [
          "guid",
          "name",
          "url",
          "author",
          "version",
          "date-published",
          "description",
          "keywords",
          "data-format",
          "source-filepath",
          "destination-filepath",
          "used-by",
          "derived-from",
          "schema",
          "associated-publication",
          "additional-documentation",
        ],
        required: [
          "name",
          "author",
          "version",
          "date-published",
          "description",
          "keywords",
          "data-format",
          "source-filepath",
          "destination-filepath",
        ],
      },
      software: {
        options: [
          "guid",
          "name",
          "author",
          "version",
          "description",
          "keywords",
          "file-format",
          "url",
          "source-filepath",
          "destination-filepath",
          "date-modified",
          "used-by-computation",
          "associated-publication",
          "additional-documentation",
        ],
        required: [
          "name",
          "author",
          "version",
          "description",
          "keywords",
          "file-format",
          "source-filepath",
          "destination-filepath",
          "date-modified",
        ],
      },
    },
    register: {
      computation: {
        options: [
          "guid",
          "name",
          "run-by",
          "command",
          "date-created",
          "description",
          "keywords",
          "used-software",
          "used-dataset",
          "generated",
        ],
        required: ["name", "run-by", "date-created", "description", "keywords"],
      },
      dataset: {
        options: [
          "guid",
          "name",
          "url",
          "author",
          "version",
          "date-published",
          "description",
          "keywords",
          "data-format",
          "filepath",
          "used-by",
          "derived-from",
          "schema",
          "associated-publication",
          "additional-documentation",
        ],
        required: [
          "name",
          "author",
          "version",
          "date-published",
          "description",
          "keywords",
          "data-format",
          "filepath",
        ],
      },
      software: {
        options: [
          "guid",
          "name",
          "author",
          "version",
          "description",
          "keywords",
          "file-format",
          "url",
          "date-modified",
          "filepath",
          "used-by-computation",
          "associated-publication",
          "additional-documentation",
        ],
        required: [
          "name",
          "author",
          "version",
          "description",
          "keywords",
          "file-format",
        ],
      },
    },
  },
  schema: {
    "create-tabular": {
      create: {
        options: ["name", "description", "guid", "separator", "header"],
        required: ["name", "description", "separator"],
      },
    },
    "add-property": {
      string: {
        options: ["name", "index", "description", "value-url", "pattern"],
        required: ["name", "index", "description"],
      },
      number: {
        options: ["name", "index", "description", "value-url"],
        required: ["name", "index", "description"],
      },
      integer: {
        options: ["name", "index", "description", "value-url"],
        required: ["name", "index", "description"],
      },
      array: {
        options: [
          "name",
          "index",
          "description",
          "value-url",
          "items-datatype",
          "min-items",
          "max-items",
          "unique-items",
        ],
        required: ["name", "index", "description", "items-datatype"],
      },
      boolean: {
        options: ["name", "index", "description", "value-url"],
        required: ["name", "index", "description"],
      },
    },
    validate: {
      validate: {
        options: ["data", "schema"],
        required: ["data", "schema"],
      },
    },
  },
  zip: {
    zip: {
      zip: {
        options: ["path"],
        required: ["path"],
      },
    },
  },
  upload: {
    rocrate: {
      rocrate: {
        options: ["name", "file"],
        required: ["name", "file"],
      },
    },
    dataset: {
      dataset: {
        options: [
          "name",
          "author",
          "version",
          "date-published",
          "description",
          "keywords",
          "data-format",
          "file",
        ],
        required: [
          "name",
          "author",
          "version",
          "date-published",
          "description",
          "keywords",
          "data-format",
          "file",
        ],
      },
    },
    software: {
      software: {
        options: [
          "name",
          "author",
          "version",
          "description",
          "keywords",
          "file-format",
          "date-modified",
          "file",
        ],
        required: [
          "name",
          "author",
          "version",
          "description",
          "keywords",
          "file-format",
          "date-modified",
          "file",
        ],
      },
    },
  },
};

export default commands;