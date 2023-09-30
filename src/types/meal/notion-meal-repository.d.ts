export type NotionProperties = Record<string, any>

export type NotionPage =
  | PageObjectResponse
  | PartialPageObjectResponse
  | PartialDatabaseObjectResponse
  | DatabaseObjectResponse
