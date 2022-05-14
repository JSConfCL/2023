export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  transform?: InputMaybe<ImageTransformOptions>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]>;
  contentType_contains?: InputMaybe<Scalars["String"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName?: InputMaybe<Scalars["String"]>;
  fileName_contains?: InputMaybe<Scalars["String"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  height?: InputMaybe<Scalars["Int"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]>;
  height_gt?: InputMaybe<Scalars["Int"]>;
  height_gte?: InputMaybe<Scalars["Int"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]>;
  height_lte?: InputMaybe<Scalars["Int"]>;
  height_not?: InputMaybe<Scalars["Int"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size?: InputMaybe<Scalars["Int"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]>;
  size_gt?: InputMaybe<Scalars["Int"]>;
  size_gte?: InputMaybe<Scalars["Int"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]>;
  size_lte?: InputMaybe<Scalars["Int"]>;
  size_not?: InputMaybe<Scalars["Int"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
  url_contains?: InputMaybe<Scalars["String"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not?: InputMaybe<Scalars["String"]>;
  url_not_contains?: InputMaybe<Scalars["String"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  width?: InputMaybe<Scalars["Int"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]>;
  width_gt?: InputMaybe<Scalars["Int"]>;
  width_gte?: InputMaybe<Scalars["Int"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]>;
  width_lte?: InputMaybe<Scalars["Int"]>;
  width_not?: InputMaybe<Scalars["Int"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  howBlockCollection?: Maybe<HowBlockCollection>;
  memberCollection?: Maybe<MemberCollection>;
  speakerCollection?: Maybe<SpeakerCollection>;
  sponsorCollection?: Maybe<SponsorCollection>;
  whyBlockCollection?: Maybe<WhyBlockCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsHowBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsMemberCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsSpeakerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsSponsorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsWhyBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlock = Entry & {
  __typename?: "HeroBlock";
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars["String"]>;
  ctaUrl?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  firstSubtitle?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<HeroBlockLinkingCollections>;
  secondSubtitle?: Maybe<Scalars["String"]>;
  sys: Sys;
  tile?: Maybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockCtaTextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockCtaUrlArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockFirstSubtitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockSecondSubtitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockTileArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type HeroBlockCollection = {
  __typename?: "HeroBlockCollection";
  items: Array<Maybe<HeroBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type HeroBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars["String"]>;
  ctaText_contains?: InputMaybe<Scalars["String"]>;
  ctaText_exists?: InputMaybe<Scalars["Boolean"]>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ctaText_not?: InputMaybe<Scalars["String"]>;
  ctaText_not_contains?: InputMaybe<Scalars["String"]>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ctaUrl?: InputMaybe<Scalars["String"]>;
  ctaUrl_contains?: InputMaybe<Scalars["String"]>;
  ctaUrl_exists?: InputMaybe<Scalars["Boolean"]>;
  ctaUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ctaUrl_not?: InputMaybe<Scalars["String"]>;
  ctaUrl_not_contains?: InputMaybe<Scalars["String"]>;
  ctaUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  firstSubtitle?: InputMaybe<Scalars["String"]>;
  firstSubtitle_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_exists?: InputMaybe<Scalars["Boolean"]>;
  firstSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  firstSubtitle_not?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  secondSubtitle?: InputMaybe<Scalars["String"]>;
  secondSubtitle_contains?: InputMaybe<Scalars["String"]>;
  secondSubtitle_exists?: InputMaybe<Scalars["Boolean"]>;
  secondSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  secondSubtitle_not?: InputMaybe<Scalars["String"]>;
  secondSubtitle_not_contains?: InputMaybe<Scalars["String"]>;
  secondSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  tile?: InputMaybe<Scalars["String"]>;
  tile_contains?: InputMaybe<Scalars["String"]>;
  tile_exists?: InputMaybe<Scalars["Boolean"]>;
  tile_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tile_not?: InputMaybe<Scalars["String"]>;
  tile_not_contains?: InputMaybe<Scalars["String"]>;
  tile_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type HeroBlockLinkingCollections = {
  __typename?: "HeroBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type HeroBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type HeroBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum HeroBlockOrder {
  CtaTextAsc = "ctaText_ASC",
  CtaTextDesc = "ctaText_DESC",
  CtaUrlAsc = "ctaUrl_ASC",
  CtaUrlDesc = "ctaUrl_DESC",
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TileAsc = "tile_ASC",
  TileDesc = "tile_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export type HowBlock = Entry & {
  __typename?: "HowBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<HowBlockDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<HowBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export type HowBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export type HowBlockImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export type HowBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export type HowBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type HowBlockCollection = {
  __typename?: "HowBlockCollection";
  items: Array<Maybe<HowBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type HowBlockDescription = {
  __typename?: "HowBlockDescription";
  json: Scalars["JSON"];
  links: HowBlockDescriptionLinks;
};

export type HowBlockDescriptionAssets = {
  __typename?: "HowBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HowBlockDescriptionEntries = {
  __typename?: "HowBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HowBlockDescriptionLinks = {
  __typename?: "HowBlockDescriptionLinks";
  assets: HowBlockDescriptionAssets;
  entries: HowBlockDescriptionEntries;
};

export type HowBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<HowBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HowBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  image_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type HowBlockLinkingCollections = {
  __typename?: "HowBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type HowBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type HowBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum HowBlockOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export type Member = Entry & {
  __typename?: "Member";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MemberLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Asset>;
  sys: Sys;
  type?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export type MemberLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export type MemberNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export type MemberPhotoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export type MemberTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type MemberCollection = {
  __typename?: "MemberCollection";
  items: Array<Maybe<Member>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type MemberFilter = {
  AND?: InputMaybe<Array<InputMaybe<MemberFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MemberFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photo_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_exists?: InputMaybe<Scalars["Boolean"]>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MemberLinkingCollections = {
  __typename?: "MemberLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  teamBlockCollection?: Maybe<TeamBlockCollection>;
};

export type MemberLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type MemberLinkingCollectionsTeamBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum MemberOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type Page = Entry & {
  __typename?: "Page";
  contentfulMetadata: ContentfulMetadata;
  heroBlock?: Maybe<HeroBlock>;
  howBlockCollection?: Maybe<PageHowBlockCollection>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  sys: Sys;
  whyBlockCollection?: Maybe<PageWhyBlockCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageHeroBlockArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageHowBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageWhyBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type PageCollection = {
  __typename?: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heroBlock?: InputMaybe<CfHeroBlockNestedFilter>;
  heroBlock_exists?: InputMaybe<Scalars["Boolean"]>;
  howBlockCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  whyBlockCollection_exists?: InputMaybe<Scalars["Boolean"]>;
};

export type PageHowBlockCollection = {
  __typename?: "PageHowBlockCollection";
  items: Array<Maybe<HowBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type PageLinkingCollections = {
  __typename?: "PageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum PageOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type PageWhyBlockCollection = {
  __typename?: "PageWhyBlockCollection";
  items: Array<Maybe<WhyBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroBlock?: Maybe<HeroBlock>;
  heroBlockCollection?: Maybe<HeroBlockCollection>;
  howBlock?: Maybe<HowBlock>;
  howBlockCollection?: Maybe<HowBlockCollection>;
  member?: Maybe<Member>;
  memberCollection?: Maybe<MemberCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  speaker?: Maybe<Speaker>;
  speakerCollection?: Maybe<SpeakerCollection>;
  sponsor?: Maybe<Sponsor>;
  sponsorCollection?: Maybe<SponsorCollection>;
  talk?: Maybe<Talk>;
  talkCollection?: Maybe<TalkCollection>;
  teamBlock?: Maybe<TeamBlock>;
  teamBlockCollection?: Maybe<TeamBlockCollection>;
  whyBlock?: Maybe<WhyBlock>;
  whyBlockCollection?: Maybe<WhyBlockCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryHeroBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryHeroBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<HeroBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HeroBlockFilter>;
};

export type QueryHowBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryHowBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<HowBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HowBlockFilter>;
};

export type QueryMemberArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryMemberCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<MemberOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MemberFilter>;
};

export type QueryPageArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PageFilter>;
};

export type QuerySpeakerArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySpeakerCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SpeakerOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SpeakerFilter>;
};

export type QuerySponsorArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySponsorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SponsorOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SponsorFilter>;
};

export type QueryTalkArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTalkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TalkOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TalkFilter>;
};

export type QueryTeamBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryTeamBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TeamBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TeamBlockFilter>;
};

export type QueryWhyBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryWhyBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<WhyBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WhyBlockFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type Speaker = Entry & {
  __typename?: "Speaker";
  about?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars["String"]>;
  github?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<SpeakerLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Asset>;
  sys: Sys;
  twitter?: Maybe<Scalars["String"]>;
  web?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerAboutArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerCityArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerCountryArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerGithubArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerPhotoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerTwitterArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerWebArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SpeakerCollection = {
  __typename?: "SpeakerCollection";
  items: Array<Maybe<Speaker>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SpeakerFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpeakerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SpeakerFilter>>>;
  about?: InputMaybe<Scalars["String"]>;
  about_contains?: InputMaybe<Scalars["String"]>;
  about_exists?: InputMaybe<Scalars["Boolean"]>;
  about_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  about_not?: InputMaybe<Scalars["String"]>;
  about_not_contains?: InputMaybe<Scalars["String"]>;
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  city?: InputMaybe<Scalars["String"]>;
  city_contains?: InputMaybe<Scalars["String"]>;
  city_exists?: InputMaybe<Scalars["Boolean"]>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  city_not?: InputMaybe<Scalars["String"]>;
  city_not_contains?: InputMaybe<Scalars["String"]>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  country?: InputMaybe<Scalars["String"]>;
  country_contains?: InputMaybe<Scalars["String"]>;
  country_exists?: InputMaybe<Scalars["Boolean"]>;
  country_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  country_not?: InputMaybe<Scalars["String"]>;
  country_not_contains?: InputMaybe<Scalars["String"]>;
  country_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  github?: InputMaybe<Scalars["String"]>;
  github_contains?: InputMaybe<Scalars["String"]>;
  github_exists?: InputMaybe<Scalars["Boolean"]>;
  github_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  github_not?: InputMaybe<Scalars["String"]>;
  github_not_contains?: InputMaybe<Scalars["String"]>;
  github_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photo_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  twitter?: InputMaybe<Scalars["String"]>;
  twitter_contains?: InputMaybe<Scalars["String"]>;
  twitter_exists?: InputMaybe<Scalars["Boolean"]>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  twitter_not?: InputMaybe<Scalars["String"]>;
  twitter_not_contains?: InputMaybe<Scalars["String"]>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  web?: InputMaybe<Scalars["String"]>;
  web_contains?: InputMaybe<Scalars["String"]>;
  web_exists?: InputMaybe<Scalars["Boolean"]>;
  web_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  web_not?: InputMaybe<Scalars["String"]>;
  web_not_contains?: InputMaybe<Scalars["String"]>;
  web_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SpeakerLinkingCollections = {
  __typename?: "SpeakerLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type SpeakerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SpeakerOrder {
  CityAsc = "city_ASC",
  CityDesc = "city_DESC",
  CountryAsc = "country_ASC",
  CountryDesc = "country_DESC",
  GithubAsc = "github_ASC",
  GithubDesc = "github_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TwitterAsc = "twitter_ASC",
  TwitterDesc = "twitter_DESC",
  WebAsc = "web_ASC",
  WebDesc = "web_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type Sponsor = Entry & {
  __typename?: "Sponsor";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<SponsorLinkingCollections>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars["String"]>;
  sys: Sys;
  type?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type SponsorDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type SponsorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type SponsorLogoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type SponsorNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type SponsorTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SponsorCollection = {
  __typename?: "SponsorCollection";
  items: Array<Maybe<Sponsor>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SponsorFilter = {
  AND?: InputMaybe<Array<InputMaybe<SponsorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  logo_exists?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_exists?: InputMaybe<Scalars["Boolean"]>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SponsorLinkingCollections = {
  __typename?: "SponsorLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type SponsorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SponsorOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
}

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["String"]>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedVersion?: InputMaybe<Scalars["Float"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export type Talk = Entry & {
  __typename?: "Talk";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TalkDescription>;
  duration?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<TalkLinkingCollections>;
  speaker?: Maybe<Entry>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export type TalkDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export type TalkDurationArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export type TalkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export type TalkSpeakerArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export type TalkTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type TalkCollection = {
  __typename?: "TalkCollection";
  items: Array<Maybe<Talk>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type TalkDescription = {
  __typename?: "TalkDescription";
  json: Scalars["JSON"];
  links: TalkDescriptionLinks;
};

export type TalkDescriptionAssets = {
  __typename?: "TalkDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TalkDescriptionEntries = {
  __typename?: "TalkDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TalkDescriptionLinks = {
  __typename?: "TalkDescriptionLinks";
  assets: TalkDescriptionAssets;
  entries: TalkDescriptionEntries;
};

export type TalkFilter = {
  AND?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TalkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  duration?: InputMaybe<Scalars["Int"]>;
  duration_exists?: InputMaybe<Scalars["Boolean"]>;
  duration_gt?: InputMaybe<Scalars["Int"]>;
  duration_gte?: InputMaybe<Scalars["Int"]>;
  duration_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  duration_lt?: InputMaybe<Scalars["Int"]>;
  duration_lte?: InputMaybe<Scalars["Int"]>;
  duration_not?: InputMaybe<Scalars["Int"]>;
  duration_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  speaker_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TalkLinkingCollections = {
  __typename?: "TalkLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type TalkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum TalkOrder {
  DurationAsc = "duration_ASC",
  DurationDesc = "duration_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export type TeamBlock = Entry & {
  __typename?: "TeamBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TeamBlockDescription>;
  linkedFrom?: Maybe<TeamBlockLinkingCollections>;
  membersCollection?: Maybe<TeamBlockMembersCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export type TeamBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export type TeamBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export type TeamBlockMembersCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export type TeamBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type TeamBlockCollection = {
  __typename?: "TeamBlockCollection";
  items: Array<Maybe<TeamBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type TeamBlockDescription = {
  __typename?: "TeamBlockDescription";
  json: Scalars["JSON"];
  links: TeamBlockDescriptionLinks;
};

export type TeamBlockDescriptionAssets = {
  __typename?: "TeamBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TeamBlockDescriptionEntries = {
  __typename?: "TeamBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TeamBlockDescriptionLinks = {
  __typename?: "TeamBlockDescriptionLinks";
  assets: TeamBlockDescriptionAssets;
  entries: TeamBlockDescriptionEntries;
};

export type TeamBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<TeamBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeamBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  membersCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TeamBlockLinkingCollections = {
  __typename?: "TeamBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type TeamBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type TeamBlockMembersCollection = {
  __typename?: "TeamBlockMembersCollection";
  items: Array<Maybe<Member>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum TeamBlockOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export type WhyBlock = Entry & {
  __typename?: "WhyBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<WhyBlockDescription>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<WhyBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export type WhyBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export type WhyBlockIconArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export type WhyBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export type WhyBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type WhyBlockCollection = {
  __typename?: "WhyBlockCollection";
  items: Array<Maybe<WhyBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type WhyBlockDescription = {
  __typename?: "WhyBlockDescription";
  json: Scalars["JSON"];
  links: WhyBlockDescriptionLinks;
};

export type WhyBlockDescriptionAssets = {
  __typename?: "WhyBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type WhyBlockDescriptionEntries = {
  __typename?: "WhyBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type WhyBlockDescriptionLinks = {
  __typename?: "WhyBlockDescriptionLinks";
  assets: WhyBlockDescriptionAssets;
  entries: WhyBlockDescriptionEntries;
};

export type WhyBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<WhyBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WhyBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  icon_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type WhyBlockLinkingCollections = {
  __typename?: "WhyBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type WhyBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type WhyBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum WhyBlockOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export type CfHeroBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroBlockNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars["String"]>;
  ctaText_contains?: InputMaybe<Scalars["String"]>;
  ctaText_exists?: InputMaybe<Scalars["Boolean"]>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ctaText_not?: InputMaybe<Scalars["String"]>;
  ctaText_not_contains?: InputMaybe<Scalars["String"]>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ctaUrl?: InputMaybe<Scalars["String"]>;
  ctaUrl_contains?: InputMaybe<Scalars["String"]>;
  ctaUrl_exists?: InputMaybe<Scalars["Boolean"]>;
  ctaUrl_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ctaUrl_not?: InputMaybe<Scalars["String"]>;
  ctaUrl_not_contains?: InputMaybe<Scalars["String"]>;
  ctaUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  date?: InputMaybe<Scalars["String"]>;
  date_contains?: InputMaybe<Scalars["String"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  date_not?: InputMaybe<Scalars["String"]>;
  date_not_contains?: InputMaybe<Scalars["String"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  firstSubtitle?: InputMaybe<Scalars["String"]>;
  firstSubtitle_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_exists?: InputMaybe<Scalars["Boolean"]>;
  firstSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  firstSubtitle_not?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  secondSubtitle?: InputMaybe<Scalars["String"]>;
  secondSubtitle_contains?: InputMaybe<Scalars["String"]>;
  secondSubtitle_exists?: InputMaybe<Scalars["Boolean"]>;
  secondSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  secondSubtitle_not?: InputMaybe<Scalars["String"]>;
  secondSubtitle_not_contains?: InputMaybe<Scalars["String"]>;
  secondSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  tile?: InputMaybe<Scalars["String"]>;
  tile_contains?: InputMaybe<Scalars["String"]>;
  tile_exists?: InputMaybe<Scalars["Boolean"]>;
  tile_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  tile_not?: InputMaybe<Scalars["String"]>;
  tile_not_contains?: InputMaybe<Scalars["String"]>;
  tile_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};
