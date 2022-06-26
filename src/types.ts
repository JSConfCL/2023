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
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: any;
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
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: any;
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
  heroBlockCollection?: Maybe<HeroBlockCollection>;
  howBlockCollection?: Maybe<HowBlockCollection>;
  lineBlockCollection?: Maybe<LineBlockCollection>;
  memberCollection?: Maybe<MemberCollection>;
  socialNetworkCollection?: Maybe<SocialNetworkCollection>;
  speakerCollection?: Maybe<SpeakerCollection>;
  sponsorCollection?: Maybe<SponsorCollection>;
  volunteerBlockCollection?: Maybe<VolunteerBlockCollection>;
  whyBlockCollection?: Maybe<WhyBlockCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsHeroBlockCollectionArgs = {
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

export type AssetLinkingCollectionsLineBlockCollectionArgs = {
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

export type AssetLinkingCollectionsSocialNetworkCollectionArgs = {
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

export type AssetLinkingCollectionsVolunteerBlockCollectionArgs = {
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

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/followUsBlock) */
export type FollowUsBlock = Entry & {
  __typename?: "FollowUsBlock";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FollowUsBlockLinkingCollections>;
  socialNetworksCollection?: Maybe<FollowUsBlockSocialNetworksCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/followUsBlock) */
export type FollowUsBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/followUsBlock) */
export type FollowUsBlockSocialNetworksCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/followUsBlock) */
export type FollowUsBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type FollowUsBlockCollection = {
  __typename?: "FollowUsBlockCollection";
  items: Array<Maybe<FollowUsBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type FollowUsBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<FollowUsBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FollowUsBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  socialNetworksCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FollowUsBlockLinkingCollections = {
  __typename?: "FollowUsBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type FollowUsBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FollowUsBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum FollowUsBlockOrder {
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

export type FollowUsBlockSocialNetworksCollection = {
  __typename?: "FollowUsBlockSocialNetworksCollection";
  items: Array<Maybe<SocialNetwork>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/footer) */
export type Footer = Entry & {
  __typename?: "Footer";
  contentfulMetadata: ContentfulMetadata;
  footerName?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  linksCollection?: Maybe<FooterLinksCollection>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/footer) */
export type FooterFooterNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/footer) */
export type FooterLinksCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FooterCollection = {
  __typename?: "FooterCollection";
  items: Array<Maybe<Footer>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerName?: InputMaybe<Scalars["String"]>;
  footerName_contains?: InputMaybe<Scalars["String"]>;
  footerName_exists?: InputMaybe<Scalars["Boolean"]>;
  footerName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  footerName_not?: InputMaybe<Scalars["String"]>;
  footerName_not_contains?: InputMaybe<Scalars["String"]>;
  footerName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  linksCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterLinkingCollections = {
  __typename?: "FooterLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FooterLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FooterLinksCollection = {
  __typename?: "FooterLinksCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum FooterOrder {
  FooterNameAsc = "footerName_ASC",
  FooterNameDesc = "footerName_DESC",
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
  background?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars["String"]>;
  ctaUrl?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["String"]>;
  description?: Maybe<HeroBlockDescription>;
  firstSubtitle?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<HeroBlockLinkingCollections>;
  secondDescription?: Maybe<HeroBlockSecondDescription>;
  secondSubtitle?: Maybe<Scalars["String"]>;
  sys: Sys;
  tile?: Maybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export type HeroBlockBackgroundArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
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
export type HeroBlockDescriptionArgs = {
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
export type HeroBlockSecondDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
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

export type HeroBlockDescription = {
  __typename?: "HeroBlockDescription";
  json: Scalars["JSON"];
  links: HeroBlockDescriptionLinks;
};

export type HeroBlockDescriptionAssets = {
  __typename?: "HeroBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroBlockDescriptionEntries = {
  __typename?: "HeroBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroBlockDescriptionLinks = {
  __typename?: "HeroBlockDescriptionLinks";
  assets: HeroBlockDescriptionAssets;
  entries: HeroBlockDescriptionEntries;
};

export type HeroBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroBlockFilter>>>;
  background_exists?: InputMaybe<Scalars["Boolean"]>;
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
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle?: InputMaybe<Scalars["String"]>;
  firstSubtitle_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_exists?: InputMaybe<Scalars["Boolean"]>;
  firstSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  firstSubtitle_not?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  secondDescription_contains?: InputMaybe<Scalars["String"]>;
  secondDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  secondDescription_not_contains?: InputMaybe<Scalars["String"]>;
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

export type HeroBlockSecondDescription = {
  __typename?: "HeroBlockSecondDescription";
  json: Scalars["JSON"];
  links: HeroBlockSecondDescriptionLinks;
};

export type HeroBlockSecondDescriptionAssets = {
  __typename?: "HeroBlockSecondDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroBlockSecondDescriptionEntries = {
  __typename?: "HeroBlockSecondDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroBlockSecondDescriptionLinks = {
  __typename?: "HeroBlockSecondDescriptionLinks";
  assets: HeroBlockSecondDescriptionAssets;
  entries: HeroBlockSecondDescriptionEntries;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export type HowBlock = Entry & {
  __typename?: "HowBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<HowBlockDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<HowBlockLinkingCollections>;
  sectionsCollection?: Maybe<HowBlockSectionsCollection>;
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
export type HowBlockSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
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
  sectionsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
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

export type HowBlockSectionsCollection = {
  __typename?: "HowBlockSectionsCollection";
  items: Array<Maybe<LineBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

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

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlock = Entry & {
  __typename?: "LineBlock";
  button?: Maybe<LinkItem>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<LineBlockDescription>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<LineBlockLinkingCollections>;
  mapa?: Maybe<Location>;
  subtext?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockButtonArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockMapaArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockSubtextArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export type LineBlockUrlArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type LineBlockCollection = {
  __typename?: "LineBlockCollection";
  items: Array<Maybe<LineBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type LineBlockDescription = {
  __typename?: "LineBlockDescription";
  json: Scalars["JSON"];
  links: LineBlockDescriptionLinks;
};

export type LineBlockDescriptionAssets = {
  __typename?: "LineBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type LineBlockDescriptionEntries = {
  __typename?: "LineBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type LineBlockDescriptionLinks = {
  __typename?: "LineBlockDescriptionLinks";
  assets: LineBlockDescriptionAssets;
  entries: LineBlockDescriptionEntries;
};

export type LineBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<LineBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LineBlockFilter>>>;
  button?: InputMaybe<CfLinkItemNestedFilter>;
  button_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  image_exists?: InputMaybe<Scalars["Boolean"]>;
  mapa_exists?: InputMaybe<Scalars["Boolean"]>;
  mapa_within_circle?: InputMaybe<Scalars["Circle"]>;
  mapa_within_rectangle?: InputMaybe<Scalars["Rectangle"]>;
  subtext?: InputMaybe<Scalars["String"]>;
  subtext_contains?: InputMaybe<Scalars["String"]>;
  subtext_exists?: InputMaybe<Scalars["Boolean"]>;
  subtext_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  subtext_not?: InputMaybe<Scalars["String"]>;
  subtext_not_contains?: InputMaybe<Scalars["String"]>;
  subtext_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
};

export type LineBlockLinkingCollections = {
  __typename?: "LineBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  howBlockCollection?: Maybe<HowBlockCollection>;
};

export type LineBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type LineBlockLinkingCollectionsHowBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum LineBlockOrder {
  SubtextAsc = "subtext_ASC",
  SubtextDesc = "subtext_DESC",
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
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
}

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export type LinkItem = Entry & {
  __typename?: "LinkItem";
  contenido?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  isBlank?: Maybe<Scalars["Boolean"]>;
  link?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<LinkItemLinkingCollections>;
  sys: Sys;
};

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export type LinkItemContenidoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export type LinkItemIsBlankArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export type LinkItemLinkArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export type LinkItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type LinkItemCollection = {
  __typename?: "LinkItemCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type LinkItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkItemFilter>>>;
  contenido?: InputMaybe<Scalars["String"]>;
  contenido_contains?: InputMaybe<Scalars["String"]>;
  contenido_exists?: InputMaybe<Scalars["Boolean"]>;
  contenido_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contenido_not?: InputMaybe<Scalars["String"]>;
  contenido_not_contains?: InputMaybe<Scalars["String"]>;
  contenido_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isBlank?: InputMaybe<Scalars["Boolean"]>;
  isBlank_exists?: InputMaybe<Scalars["Boolean"]>;
  isBlank_not?: InputMaybe<Scalars["Boolean"]>;
  link?: InputMaybe<Scalars["String"]>;
  link_contains?: InputMaybe<Scalars["String"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  link_not?: InputMaybe<Scalars["String"]>;
  link_not_contains?: InputMaybe<Scalars["String"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LinkItemLinkingCollections = {
  __typename?: "LinkItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  lineBlockCollection?: Maybe<LineBlockCollection>;
  navigationBarCollection?: Maybe<NavigationBarCollection>;
};

export type LinkItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type LinkItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type LinkItemLinkingCollectionsLineBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type LinkItemLinkingCollectionsNavigationBarCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum LinkItemOrder {
  ContenidoAsc = "contenido_ASC",
  ContenidoDesc = "contenido_DESC",
  IsBlankAsc = "isBlank_ASC",
  IsBlankDesc = "isBlank_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Location = {
  __typename?: "Location";
  lat?: Maybe<Scalars["Float"]>;
  lon?: Maybe<Scalars["Float"]>;
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

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export type NavigationBar = Entry & {
  __typename?: "NavigationBar";
  buttonsCollection?: Maybe<NavigationBarButtonsCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<NavigationBarDescription>;
  linkedFrom?: Maybe<NavigationBarLinkingCollections>;
  linksCollection?: Maybe<NavigationBarLinksCollection>;
  navbarName?: Maybe<Scalars["String"]>;
  sys: Sys;
};

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export type NavigationBarButtonsCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export type NavigationBarDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export type NavigationBarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export type NavigationBarLinksCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export type NavigationBarNavbarNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type NavigationBarButtonsCollection = {
  __typename?: "NavigationBarButtonsCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type NavigationBarCollection = {
  __typename?: "NavigationBarCollection";
  items: Array<Maybe<NavigationBar>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type NavigationBarDescription = {
  __typename?: "NavigationBarDescription";
  json: Scalars["JSON"];
  links: NavigationBarDescriptionLinks;
};

export type NavigationBarDescriptionAssets = {
  __typename?: "NavigationBarDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NavigationBarDescriptionEntries = {
  __typename?: "NavigationBarDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NavigationBarDescriptionLinks = {
  __typename?: "NavigationBarDescriptionLinks";
  assets: NavigationBarDescriptionAssets;
  entries: NavigationBarDescriptionEntries;
};

export type NavigationBarFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationBarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationBarFilter>>>;
  buttonsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  linksCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  navbarName?: InputMaybe<Scalars["String"]>;
  navbarName_contains?: InputMaybe<Scalars["String"]>;
  navbarName_exists?: InputMaybe<Scalars["Boolean"]>;
  navbarName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  navbarName_not?: InputMaybe<Scalars["String"]>;
  navbarName_not_contains?: InputMaybe<Scalars["String"]>;
  navbarName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationBarLinkingCollections = {
  __typename?: "NavigationBarLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type NavigationBarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type NavigationBarLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type NavigationBarLinksCollection = {
  __typename?: "NavigationBarLinksCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export enum NavigationBarOrder {
  NavbarNameAsc = "navbarName_ASC",
  NavbarNameDesc = "navbarName_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type Page = Entry & {
  __typename?: "Page";
  contentfulMetadata: ContentfulMetadata;
  followUsBlock?: Maybe<FollowUsBlock>;
  footer?: Maybe<Footer>;
  heroBlock?: Maybe<HeroBlock>;
  howBlockCollection?: Maybe<PageHowBlockCollection>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  navBar?: Maybe<NavigationBar>;
  seo?: Maybe<Seo>;
  speakersBlock?: Maybe<SpeakerBlock>;
  sponsorTypeCollection?: Maybe<PageSponsorTypeCollection>;
  subscribeBlock?: Maybe<SubscribeBlock>;
  sys: Sys;
  whyBlockCollection?: Maybe<PageWhyBlockCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageFollowUsBlockArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageFooterArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
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
export type PageNavBarArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageSpeakersBlockArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageSponsorTypeCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export type PageSubscribeBlockArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
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
  followUsBlock?: InputMaybe<CfFollowUsBlockNestedFilter>;
  followUsBlock_exists?: InputMaybe<Scalars["Boolean"]>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars["Boolean"]>;
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
  navBar?: InputMaybe<CfNavigationBarNestedFilter>;
  navBar_exists?: InputMaybe<Scalars["Boolean"]>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars["Boolean"]>;
  speakersBlock?: InputMaybe<CfSpeakerBlockNestedFilter>;
  speakersBlock_exists?: InputMaybe<Scalars["Boolean"]>;
  sponsorTypeCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  subscribeBlock?: InputMaybe<CfSubscribeBlockNestedFilter>;
  subscribeBlock_exists?: InputMaybe<Scalars["Boolean"]>;
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

export type PageSponsorTypeCollection = {
  __typename?: "PageSponsorTypeCollection";
  items: Array<Maybe<SponsorType>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

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
  followUsBlock?: Maybe<FollowUsBlock>;
  followUsBlockCollection?: Maybe<FollowUsBlockCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  heroBlock?: Maybe<HeroBlock>;
  heroBlockCollection?: Maybe<HeroBlockCollection>;
  howBlock?: Maybe<HowBlock>;
  howBlockCollection?: Maybe<HowBlockCollection>;
  lineBlock?: Maybe<LineBlock>;
  lineBlockCollection?: Maybe<LineBlockCollection>;
  linkItem?: Maybe<LinkItem>;
  linkItemCollection?: Maybe<LinkItemCollection>;
  member?: Maybe<Member>;
  memberCollection?: Maybe<MemberCollection>;
  navigationBar?: Maybe<NavigationBar>;
  navigationBarCollection?: Maybe<NavigationBarCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  socialNetwork?: Maybe<SocialNetwork>;
  socialNetworkCollection?: Maybe<SocialNetworkCollection>;
  speaker?: Maybe<Speaker>;
  speakerBlock?: Maybe<SpeakerBlock>;
  speakerBlockCollection?: Maybe<SpeakerBlockCollection>;
  speakerCollection?: Maybe<SpeakerCollection>;
  sponsor?: Maybe<Sponsor>;
  sponsorCollection?: Maybe<SponsorCollection>;
  sponsorType?: Maybe<SponsorType>;
  sponsorTypeCollection?: Maybe<SponsorTypeCollection>;
  subscribeBlock?: Maybe<SubscribeBlock>;
  subscribeBlockCollection?: Maybe<SubscribeBlockCollection>;
  talk?: Maybe<Talk>;
  talkCollection?: Maybe<TalkCollection>;
  teamBlock?: Maybe<TeamBlock>;
  teamBlockCollection?: Maybe<TeamBlockCollection>;
  volunteerBlock?: Maybe<VolunteerBlock>;
  volunteerBlockCollection?: Maybe<VolunteerBlockCollection>;
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

export type QueryFollowUsBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryFollowUsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<FollowUsBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FollowUsBlockFilter>;
};

export type QueryFooterArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FooterFilter>;
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

export type QueryLineBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryLineBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<LineBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LineBlockFilter>;
};

export type QueryLinkItemArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryLinkItemCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<LinkItemOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LinkItemFilter>;
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

export type QueryNavigationBarArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryNavigationBarCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<NavigationBarOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<NavigationBarFilter>;
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

export type QuerySeoArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SeoFilter>;
};

export type QuerySocialNetworkArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySocialNetworkCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SocialNetworkOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SocialNetworkFilter>;
};

export type QuerySpeakerArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySpeakerBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySpeakerBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SpeakerBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SpeakerBlockFilter>;
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

export type QuerySponsorTypeArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySponsorTypeCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SponsorTypeOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SponsorTypeFilter>;
};

export type QuerySubscribeBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QuerySubscribeBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SubscribeBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SubscribeBlockFilter>;
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

export type QueryVolunteerBlockArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryVolunteerBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<VolunteerBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VolunteerBlockFilter>;
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

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export type Seo = Entry & {
  __typename?: "Seo";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  metadata?: Maybe<Scalars["JSON"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export type SeoMetadataArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SeoCollection = {
  __typename?: "SeoCollection";
  items: Array<Maybe<Seo>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metadata_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SeoLinkingCollections = {
  __typename?: "SeoLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SeoOrder {
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
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

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export type SocialNetwork = Entry & {
  __typename?: "SocialNetwork";
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<SocialNetworkLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  sys: Sys;
  url?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export type SocialNetworkIconArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export type SocialNetworkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export type SocialNetworkNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export type SocialNetworkUrlArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SocialNetworkCollection = {
  __typename?: "SocialNetworkCollection";
  items: Array<Maybe<SocialNetwork>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SocialNetworkFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialNetworkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialNetworkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars["String"]>;
  url_contains?: InputMaybe<Scalars["String"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not?: InputMaybe<Scalars["String"]>;
  url_not_contains?: InputMaybe<Scalars["String"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SocialNetworkLinkingCollections = {
  __typename?: "SocialNetworkLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  followUsBlockCollection?: Maybe<FollowUsBlockCollection>;
};

export type SocialNetworkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SocialNetworkLinkingCollectionsFollowUsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SocialNetworkOrder {
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
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type Speaker = Entry & {
  __typename?: "Speaker";
  about?: Maybe<Scalars["String"]>;
  cardType?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  country?: Maybe<Scalars["String"]>;
  github?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<SpeakerLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Asset>;
  position?: Maybe<Scalars["String"]>;
  sys: Sys;
  twitter?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  web?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerAboutArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerCardTypeArgs = {
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
export type SpeakerPositionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerTwitterArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerTypeArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export type SpeakerWebArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export type SpeakerBlock = Entry & {
  __typename?: "SpeakerBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<SpeakerBlockDescription>;
  linkedFrom?: Maybe<SpeakerBlockLinkingCollections>;
  speakersCollection?: Maybe<SpeakerBlockSpeakersCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export type SpeakerBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export type SpeakerBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export type SpeakerBlockSpeakersCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export type SpeakerBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SpeakerBlockCollection = {
  __typename?: "SpeakerBlockCollection";
  items: Array<Maybe<SpeakerBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SpeakerBlockDescription = {
  __typename?: "SpeakerBlockDescription";
  json: Scalars["JSON"];
  links: SpeakerBlockDescriptionLinks;
};

export type SpeakerBlockDescriptionAssets = {
  __typename?: "SpeakerBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SpeakerBlockDescriptionEntries = {
  __typename?: "SpeakerBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SpeakerBlockDescriptionLinks = {
  __typename?: "SpeakerBlockDescriptionLinks";
  assets: SpeakerBlockDescriptionAssets;
  entries: SpeakerBlockDescriptionEntries;
};

export type SpeakerBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<SpeakerBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SpeakerBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  speakersCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SpeakerBlockLinkingCollections = {
  __typename?: "SpeakerBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type SpeakerBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SpeakerBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SpeakerBlockOrder {
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

export type SpeakerBlockSpeakersCollection = {
  __typename?: "SpeakerBlockSpeakersCollection";
  items: Array<Maybe<Speaker>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
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
  cardType?: InputMaybe<Scalars["String"]>;
  cardType_contains?: InputMaybe<Scalars["String"]>;
  cardType_exists?: InputMaybe<Scalars["Boolean"]>;
  cardType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  cardType_not?: InputMaybe<Scalars["String"]>;
  cardType_not_contains?: InputMaybe<Scalars["String"]>;
  cardType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  position?: InputMaybe<Scalars["String"]>;
  position_contains?: InputMaybe<Scalars["String"]>;
  position_exists?: InputMaybe<Scalars["Boolean"]>;
  position_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  position_not?: InputMaybe<Scalars["String"]>;
  position_not_contains?: InputMaybe<Scalars["String"]>;
  position_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  twitter?: InputMaybe<Scalars["String"]>;
  twitter_contains?: InputMaybe<Scalars["String"]>;
  twitter_exists?: InputMaybe<Scalars["Boolean"]>;
  twitter_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  twitter_not?: InputMaybe<Scalars["String"]>;
  twitter_not_contains?: InputMaybe<Scalars["String"]>;
  twitter_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_exists?: InputMaybe<Scalars["Boolean"]>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  speakerBlockCollection?: Maybe<SpeakerBlockCollection>;
};

export type SpeakerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SpeakerLinkingCollectionsSpeakerBlockCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SpeakerOrder {
  CardTypeAsc = "cardType_ASC",
  CardTypeDesc = "cardType_DESC",
  CityAsc = "city_ASC",
  CityDesc = "city_DESC",
  CountryAsc = "country_ASC",
  CountryDesc = "country_DESC",
  GithubAsc = "github_ASC",
  GithubDesc = "github_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PositionAsc = "position_ASC",
  PositionDesc = "position_DESC",
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
  TypeAsc = "type_ASC",
  TypeDesc = "type_DESC",
  WebAsc = "web_ASC",
  WebDesc = "web_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export type Sponsor = Entry & {
  __typename?: "Sponsor";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<SponsorDescription>;
  linkedFrom?: Maybe<SponsorLinkingCollections>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars["String"]>;
  sys: Sys;
  type?: Maybe<Entry>;
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
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type SponsorCollection = {
  __typename?: "SponsorCollection";
  items: Array<Maybe<Sponsor>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SponsorDescription = {
  __typename?: "SponsorDescription";
  json: Scalars["JSON"];
  links: SponsorDescriptionLinks;
};

export type SponsorDescriptionAssets = {
  __typename?: "SponsorDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SponsorDescriptionEntries = {
  __typename?: "SponsorDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SponsorDescriptionLinks = {
  __typename?: "SponsorDescriptionLinks";
  assets: SponsorDescriptionAssets;
  entries: SponsorDescriptionEntries;
};

export type SponsorFilter = {
  AND?: InputMaybe<Array<InputMaybe<SponsorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  logo_exists?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  type_exists?: InputMaybe<Scalars["Boolean"]>;
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
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export type SponsorType = Entry & {
  __typename?: "SponsorType";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<SponsorTypeDescription>;
  linkedFrom?: Maybe<SponsorTypeLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export type SponsorTypeDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export type SponsorTypeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export type SponsorTypeNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export type SponsorTypePriceArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SponsorTypeCollection = {
  __typename?: "SponsorTypeCollection";
  items: Array<Maybe<SponsorType>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SponsorTypeDescription = {
  __typename?: "SponsorTypeDescription";
  json: Scalars["JSON"];
  links: SponsorTypeDescriptionLinks;
};

export type SponsorTypeDescriptionAssets = {
  __typename?: "SponsorTypeDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SponsorTypeDescriptionEntries = {
  __typename?: "SponsorTypeDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SponsorTypeDescriptionLinks = {
  __typename?: "SponsorTypeDescriptionLinks";
  assets: SponsorTypeDescriptionAssets;
  entries: SponsorTypeDescriptionEntries;
};

export type SponsorTypeFilter = {
  AND?: InputMaybe<Array<InputMaybe<SponsorTypeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorTypeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  price?: InputMaybe<Scalars["Int"]>;
  price_exists?: InputMaybe<Scalars["Boolean"]>;
  price_gt?: InputMaybe<Scalars["Int"]>;
  price_gte?: InputMaybe<Scalars["Int"]>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  price_lt?: InputMaybe<Scalars["Int"]>;
  price_lte?: InputMaybe<Scalars["Int"]>;
  price_not?: InputMaybe<Scalars["Int"]>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SponsorTypeLinkingCollections = {
  __typename?: "SponsorTypeLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type SponsorTypeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SponsorTypeLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SponsorTypeOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/subscribeBlock) */
export type SubscribeBlock = Entry & {
  __typename?: "SubscribeBlock";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SubscribeBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/subscribeBlock) */
export type SubscribeBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/subscribeBlock) */
export type SubscribeBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type SubscribeBlockCollection = {
  __typename?: "SubscribeBlockCollection";
  items: Array<Maybe<SubscribeBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type SubscribeBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<SubscribeBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SubscribeBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type SubscribeBlockLinkingCollections = {
  __typename?: "SubscribeBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};

export type SubscribeBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SubscribeBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum SubscribeBlockOrder {
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

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlock = Entry & {
  __typename?: "VolunteerBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<VolunteerBlockDescription>;
  extendedDescription?: Maybe<VolunteerBlockExtendedDescription>;
  fullImage?: Maybe<Asset>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<VolunteerBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlockExtendedDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlockFullImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlockIconArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export type VolunteerBlockTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type VolunteerBlockCollection = {
  __typename?: "VolunteerBlockCollection";
  items: Array<Maybe<VolunteerBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type VolunteerBlockDescription = {
  __typename?: "VolunteerBlockDescription";
  json: Scalars["JSON"];
  links: VolunteerBlockDescriptionLinks;
};

export type VolunteerBlockDescriptionAssets = {
  __typename?: "VolunteerBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type VolunteerBlockDescriptionEntries = {
  __typename?: "VolunteerBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type VolunteerBlockDescriptionLinks = {
  __typename?: "VolunteerBlockDescriptionLinks";
  assets: VolunteerBlockDescriptionAssets;
  entries: VolunteerBlockDescriptionEntries;
};

export type VolunteerBlockExtendedDescription = {
  __typename?: "VolunteerBlockExtendedDescription";
  json: Scalars["JSON"];
  links: VolunteerBlockExtendedDescriptionLinks;
};

export type VolunteerBlockExtendedDescriptionAssets = {
  __typename?: "VolunteerBlockExtendedDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type VolunteerBlockExtendedDescriptionEntries = {
  __typename?: "VolunteerBlockExtendedDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type VolunteerBlockExtendedDescriptionLinks = {
  __typename?: "VolunteerBlockExtendedDescriptionLinks";
  assets: VolunteerBlockExtendedDescriptionAssets;
  entries: VolunteerBlockExtendedDescriptionEntries;
};

export type VolunteerBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<VolunteerBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VolunteerBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  extendedDescription_contains?: InputMaybe<Scalars["String"]>;
  extendedDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  extendedDescription_not_contains?: InputMaybe<Scalars["String"]>;
  fullImage_exists?: InputMaybe<Scalars["Boolean"]>;
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

export type VolunteerBlockLinkingCollections = {
  __typename?: "VolunteerBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type VolunteerBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export enum VolunteerBlockOrder {
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
  extendedDescription?: Maybe<WhyBlockExtendedDescription>;
  fullImage?: Maybe<Asset>;
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
export type WhyBlockExtendedDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export type WhyBlockFullImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
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

export type WhyBlockExtendedDescription = {
  __typename?: "WhyBlockExtendedDescription";
  json: Scalars["JSON"];
  links: WhyBlockExtendedDescriptionLinks;
};

export type WhyBlockExtendedDescriptionAssets = {
  __typename?: "WhyBlockExtendedDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type WhyBlockExtendedDescriptionEntries = {
  __typename?: "WhyBlockExtendedDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type WhyBlockExtendedDescriptionLinks = {
  __typename?: "WhyBlockExtendedDescriptionLinks";
  assets: WhyBlockExtendedDescriptionAssets;
  entries: WhyBlockExtendedDescriptionEntries;
};

export type WhyBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<WhyBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WhyBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  extendedDescription_contains?: InputMaybe<Scalars["String"]>;
  extendedDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  extendedDescription_not_contains?: InputMaybe<Scalars["String"]>;
  fullImage_exists?: InputMaybe<Scalars["Boolean"]>;
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

export type CfFollowUsBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFollowUsBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFollowUsBlockNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  socialNetworksCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CfFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerName?: InputMaybe<Scalars["String"]>;
  footerName_contains?: InputMaybe<Scalars["String"]>;
  footerName_exists?: InputMaybe<Scalars["Boolean"]>;
  footerName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  footerName_not?: InputMaybe<Scalars["String"]>;
  footerName_not_contains?: InputMaybe<Scalars["String"]>;
  footerName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  linksCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeroBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroBlockNestedFilter>>>;
  background_exists?: InputMaybe<Scalars["Boolean"]>;
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
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle?: InputMaybe<Scalars["String"]>;
  firstSubtitle_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_exists?: InputMaybe<Scalars["Boolean"]>;
  firstSubtitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  firstSubtitle_not?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_contains?: InputMaybe<Scalars["String"]>;
  firstSubtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  secondDescription_contains?: InputMaybe<Scalars["String"]>;
  secondDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  secondDescription_not_contains?: InputMaybe<Scalars["String"]>;
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

export type CfLinkItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkItemNestedFilter>>>;
  contenido?: InputMaybe<Scalars["String"]>;
  contenido_contains?: InputMaybe<Scalars["String"]>;
  contenido_exists?: InputMaybe<Scalars["Boolean"]>;
  contenido_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contenido_not?: InputMaybe<Scalars["String"]>;
  contenido_not_contains?: InputMaybe<Scalars["String"]>;
  contenido_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  isBlank?: InputMaybe<Scalars["Boolean"]>;
  isBlank_exists?: InputMaybe<Scalars["Boolean"]>;
  isBlank_not?: InputMaybe<Scalars["Boolean"]>;
  link?: InputMaybe<Scalars["String"]>;
  link_contains?: InputMaybe<Scalars["String"]>;
  link_exists?: InputMaybe<Scalars["Boolean"]>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  link_not?: InputMaybe<Scalars["String"]>;
  link_not_contains?: InputMaybe<Scalars["String"]>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNavigationBarNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationBarNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationBarNestedFilter>>>;
  buttonsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  linksCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  navbarName?: InputMaybe<Scalars["String"]>;
  navbarName_contains?: InputMaybe<Scalars["String"]>;
  navbarName_exists?: InputMaybe<Scalars["Boolean"]>;
  navbarName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  navbarName_not?: InputMaybe<Scalars["String"]>;
  navbarName_not_contains?: InputMaybe<Scalars["String"]>;
  navbarName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metadata_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CfSpeakerBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSpeakerBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSpeakerBlockNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  speakersCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CfSubscribeBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSubscribeBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSubscribeBlockNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};
