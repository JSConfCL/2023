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
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Circle: any;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
  Rectangle: any;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface Asset {
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
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetContentTypeArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetFileNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetHeightArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetSizeArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetUrlArgs {
  locale?: InputMaybe<Scalars["String"]>;
  transform?: InputMaybe<ImageTransformOptions>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetWidthArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface AssetCollection {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface AssetFilter {
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
}

export interface AssetLinkingCollections {
  __typename?: "AssetLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  heroBlockCollection?: Maybe<HeroBlockCollection>;
  howBlockCollection?: Maybe<HowBlockCollection>;
  lineBlockCollection?: Maybe<LineBlockCollection>;
  memberCollection?: Maybe<MemberCollection>;
  socialNetworkCollection?: Maybe<SocialNetworkCollection>;
  speakerCollection?: Maybe<SpeakerCollection>;
  sponsorBlockCollection?: Maybe<SponsorBlockCollection>;
  sponsorCollection?: Maybe<SponsorCollection>;
  ticketBlockCollection?: Maybe<TicketBlockCollection>;
  volunteerBlockCollection?: Maybe<VolunteerBlockCollection>;
  whyBlockCollection?: Maybe<WhyBlockCollection>;
}

export interface AssetLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsHeroBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsHowBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsLineBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsMemberCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsSocialNetworkCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsSpeakerCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsSponsorBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsSponsorCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsTicketBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsVolunteerBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface AssetLinkingCollectionsWhyBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface ContentfulMetadata {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
}

export interface ContentfulMetadataFilter {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]>;
}

export interface ContentfulMetadataTagsFilter {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export interface ContentfulTag {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
}

export interface Entry {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
}

export interface EntryCollection {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface EntryFilter {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
}

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

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export type Event = Entry & {
  __typename?: "Event";
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<EventDescription>;
  duration?: Maybe<Scalars["Int"]>;
  kind?: Maybe<Scalars["String"]>;
  language?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  speaker?: Maybe<Speaker>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventDateArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventDurationArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventKindArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventLanguageArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventSpeakerArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** The different events during the JSConf [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/event) */
export interface EventTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface EventCollection {
  __typename?: "EventCollection";
  items: Array<Maybe<Event>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface EventDescription {
  __typename?: "EventDescription";
  json: Scalars["JSON"];
  links: EventDescriptionLinks;
}

export interface EventDescriptionAssets {
  __typename?: "EventDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface EventDescriptionEntries {
  __typename?: "EventDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface EventDescriptionLinks {
  __typename?: "EventDescriptionLinks";
  assets: EventDescriptionAssets;
  entries: EventDescriptionEntries;
}

export interface EventFilter {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]>;
  date_not?: InputMaybe<Scalars["DateTime"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
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
  kind?: InputMaybe<Scalars["String"]>;
  kind_contains?: InputMaybe<Scalars["String"]>;
  kind_exists?: InputMaybe<Scalars["Boolean"]>;
  kind_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  kind_not?: InputMaybe<Scalars["String"]>;
  kind_not_contains?: InputMaybe<Scalars["String"]>;
  kind_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  language?: InputMaybe<Scalars["String"]>;
  language_contains?: InputMaybe<Scalars["String"]>;
  language_exists?: InputMaybe<Scalars["Boolean"]>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  language_not?: InputMaybe<Scalars["String"]>;
  language_not_contains?: InputMaybe<Scalars["String"]>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  speaker?: InputMaybe<CfSpeakerNestedFilter>;
  speaker_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface EventLinkingCollections {
  __typename?: "EventLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface EventLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface EventLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export enum EventOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  DurationAsc = "duration_ASC",
  DurationDesc = "duration_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  LanguageAsc = "language_ASC",
  LanguageDesc = "language_DESC",
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
export interface FollowUsBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/followUsBlock) */
export interface FollowUsBlockSocialNetworksCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/followUsBlock) */
export interface FollowUsBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface FollowUsBlockCollection {
  __typename?: "FollowUsBlockCollection";
  items: Array<Maybe<FollowUsBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface FollowUsBlockFilter {
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
}

export interface FollowUsBlockLinkingCollections {
  __typename?: "FollowUsBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface FollowUsBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface FollowUsBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface FollowUsBlockSocialNetworksCollection {
  __typename?: "FollowUsBlockSocialNetworksCollection";
  items: Array<Maybe<SocialNetwork>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

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
export interface FooterFooterNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/footer) */
export interface FooterLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/footer) */
export interface FooterLinksCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface FooterCollection {
  __typename?: "FooterCollection";
  items: Array<Maybe<Footer>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface FooterFilter {
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
}

export interface FooterLinkingCollections {
  __typename?: "FooterLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface FooterLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface FooterLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface FooterLinksCollection {
  __typename?: "FooterLinksCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

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
  secondButton?: Maybe<LinkItem>;
  secondDescription?: Maybe<HeroBlockSecondDescription>;
  secondSubtitle?: Maybe<Scalars["String"]>;
  sys: Sys;
  tile?: Maybe<Scalars["String"]>;
};

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockBackgroundArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockCtaTextArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockCtaUrlArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockDateArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockFirstSubtitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockSecondButtonArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockSecondDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockSecondSubtitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Primera sección del sitio :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/heroBlock) */
export interface HeroBlockTileArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface HeroBlockCollection {
  __typename?: "HeroBlockCollection";
  items: Array<Maybe<HeroBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface HeroBlockDescription {
  __typename?: "HeroBlockDescription";
  json: Scalars["JSON"];
  links: HeroBlockDescriptionLinks;
}

export interface HeroBlockDescriptionAssets {
  __typename?: "HeroBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface HeroBlockDescriptionEntries {
  __typename?: "HeroBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface HeroBlockDescriptionLinks {
  __typename?: "HeroBlockDescriptionLinks";
  assets: HeroBlockDescriptionAssets;
  entries: HeroBlockDescriptionEntries;
}

export interface HeroBlockFilter {
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
  secondButton?: InputMaybe<CfLinkItemNestedFilter>;
  secondButton_exists?: InputMaybe<Scalars["Boolean"]>;
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
}

export interface HeroBlockLinkingCollections {
  __typename?: "HeroBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface HeroBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface HeroBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface HeroBlockSecondDescription {
  __typename?: "HeroBlockSecondDescription";
  json: Scalars["JSON"];
  links: HeroBlockSecondDescriptionLinks;
}

export interface HeroBlockSecondDescriptionAssets {
  __typename?: "HeroBlockSecondDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface HeroBlockSecondDescriptionEntries {
  __typename?: "HeroBlockSecondDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface HeroBlockSecondDescriptionLinks {
  __typename?: "HeroBlockSecondDescriptionLinks";
  assets: HeroBlockSecondDescriptionAssets;
  entries: HeroBlockSecondDescriptionEntries;
}

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
export interface HowBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export interface HowBlockImageArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export interface HowBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export interface HowBlockSectionsCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/howBlock) */
export interface HowBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface HowBlockCollection {
  __typename?: "HowBlockCollection";
  items: Array<Maybe<HowBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface HowBlockDescription {
  __typename?: "HowBlockDescription";
  json: Scalars["JSON"];
  links: HowBlockDescriptionLinks;
}

export interface HowBlockDescriptionAssets {
  __typename?: "HowBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface HowBlockDescriptionEntries {
  __typename?: "HowBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface HowBlockDescriptionLinks {
  __typename?: "HowBlockDescriptionLinks";
  assets: HowBlockDescriptionAssets;
  entries: HowBlockDescriptionEntries;
}

export interface HowBlockFilter {
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
}

export interface HowBlockLinkingCollections {
  __typename?: "HowBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface HowBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface HowBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface HowBlockSectionsCollection {
  __typename?: "HowBlockSectionsCollection";
  items: Array<Maybe<LineBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
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

export interface ImageTransformOptions {
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
}

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
export interface LineBlockButtonArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockImageArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockMapaArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockSubtextArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/lineBlock) */
export interface LineBlockUrlArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface LineBlockCollection {
  __typename?: "LineBlockCollection";
  items: Array<Maybe<LineBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface LineBlockDescription {
  __typename?: "LineBlockDescription";
  json: Scalars["JSON"];
  links: LineBlockDescriptionLinks;
}

export interface LineBlockDescriptionAssets {
  __typename?: "LineBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface LineBlockDescriptionEntries {
  __typename?: "LineBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface LineBlockDescriptionLinks {
  __typename?: "LineBlockDescriptionLinks";
  assets: LineBlockDescriptionAssets;
  entries: LineBlockDescriptionEntries;
}

export interface LineBlockFilter {
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
}

export interface LineBlockLinkingCollections {
  __typename?: "LineBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  howBlockCollection?: Maybe<HowBlockCollection>;
}

export interface LineBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface LineBlockLinkingCollectionsHowBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
export interface LinkItemContenidoArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export interface LinkItemIsBlankArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export interface LinkItemLinkArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** para CTAs, links, header links, etc. TIene un "contenido" y una "url" [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/linkItem) */
export interface LinkItemLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

export interface LinkItemCollection {
  __typename?: "LinkItemCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface LinkItemFilter {
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
}

export interface LinkItemLinkingCollections {
  __typename?: "LinkItemLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  heroBlockCollection?: Maybe<HeroBlockCollection>;
  lineBlockCollection?: Maybe<LineBlockCollection>;
  navigationBarCollection?: Maybe<NavigationBarCollection>;
  teamBlockCollection?: Maybe<TeamBlockCollection>;
}

export interface LinkItemLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface LinkItemLinkingCollectionsFooterCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface LinkItemLinkingCollectionsHeroBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface LinkItemLinkingCollectionsLineBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface LinkItemLinkingCollectionsNavigationBarCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface LinkItemLinkingCollectionsTeamBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface Location {
  __typename?: "Location";
  lat?: Maybe<Scalars["Float"]>;
  lon?: Maybe<Scalars["Float"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export type Member = Entry & {
  __typename?: "Member";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MemberLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Asset>;
  sys: Sys;
  twitter?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export interface MemberLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export interface MemberNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export interface MemberPhotoArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export interface MemberTwitterArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/member) */
export interface MemberTypeArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface MemberCollection {
  __typename?: "MemberCollection";
  items: Array<Maybe<Member>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface MemberFilter {
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
}

export interface MemberLinkingCollections {
  __typename?: "MemberLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  teamBlockCollection?: Maybe<TeamBlockCollection>;
}

export interface MemberLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface MemberLinkingCollectionsTeamBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
  TwitterAsc = "twitter_ASC",
  TwitterDesc = "twitter_DESC",
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
export interface NavigationBarButtonsCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export interface NavigationBarDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export interface NavigationBarLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export interface NavigationBarLinksCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** Navigation Bar. Links y ETC :) [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/navigationBar) */
export interface NavigationBarNavbarNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface NavigationBarButtonsCollection {
  __typename?: "NavigationBarButtonsCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface NavigationBarCollection {
  __typename?: "NavigationBarCollection";
  items: Array<Maybe<NavigationBar>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface NavigationBarDescription {
  __typename?: "NavigationBarDescription";
  json: Scalars["JSON"];
  links: NavigationBarDescriptionLinks;
}

export interface NavigationBarDescriptionAssets {
  __typename?: "NavigationBarDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface NavigationBarDescriptionEntries {
  __typename?: "NavigationBarDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface NavigationBarDescriptionLinks {
  __typename?: "NavigationBarDescriptionLinks";
  assets: NavigationBarDescriptionAssets;
  entries: NavigationBarDescriptionEntries;
}

export interface NavigationBarFilter {
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
}

export interface NavigationBarLinkingCollections {
  __typename?: "NavigationBarLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface NavigationBarLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface NavigationBarLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface NavigationBarLinksCollection {
  __typename?: "NavigationBarLinksCollection";
  items: Array<Maybe<LinkItem>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

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
  eventsCollection?: Maybe<PageEventsCollection>;
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
  teamBlock?: Maybe<TeamBlock>;
  whyBlockCollection?: Maybe<PageWhyBlockCollection>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageEventsCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageFollowUsBlockArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageFooterArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageHeroBlockArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageHowBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageNavBarArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageSeoArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageSpeakersBlockArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageSponsorTypeCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageSubscribeBlockArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageTeamBlockArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/page) */
export interface PageWhyBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface PageCollection {
  __typename?: "PageCollection";
  items: Array<Maybe<Page>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface PageEventsCollection {
  __typename?: "PageEventsCollection";
  items: Array<Maybe<Event>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface PageFilter {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  eventsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
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
  teamBlock?: InputMaybe<CfTeamBlockNestedFilter>;
  teamBlock_exists?: InputMaybe<Scalars["Boolean"]>;
  whyBlockCollection_exists?: InputMaybe<Scalars["Boolean"]>;
}

export interface PageHowBlockCollection {
  __typename?: "PageHowBlockCollection";
  items: Array<Maybe<HowBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface PageLinkingCollections {
  __typename?: "PageLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
}

export interface PageLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface PageSponsorTypeCollection {
  __typename?: "PageSponsorTypeCollection";
  items: Array<Maybe<SponsorType>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface PageWhyBlockCollection {
  __typename?: "PageWhyBlockCollection";
  items: Array<Maybe<WhyBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface Query {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
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
  sponsorBlock?: Maybe<SponsorBlock>;
  sponsorBlockCollection?: Maybe<SponsorBlockCollection>;
  sponsorCollection?: Maybe<SponsorCollection>;
  sponsorType?: Maybe<SponsorType>;
  sponsorTypeCollection?: Maybe<SponsorTypeCollection>;
  subscribeBlock?: Maybe<SubscribeBlock>;
  subscribeBlockCollection?: Maybe<SubscribeBlockCollection>;
  talk?: Maybe<Talk>;
  talkCollection?: Maybe<TalkCollection>;
  teamBlock?: Maybe<TeamBlock>;
  teamBlockCollection?: Maybe<TeamBlockCollection>;
  ticketBlock?: Maybe<TicketBlock>;
  ticketBlockCollection?: Maybe<TicketBlockCollection>;
  volunteerBlock?: Maybe<VolunteerBlock>;
  volunteerBlockCollection?: Maybe<VolunteerBlockCollection>;
  whyBlock?: Maybe<WhyBlock>;
  whyBlockCollection?: Maybe<WhyBlockCollection>;
}

export interface QueryAssetArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryAssetCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetFilter>;
}

export interface QueryEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EntryFilter>;
}

export interface QueryEventArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryEventCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EventFilter>;
}

export interface QueryFollowUsBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryFollowUsBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<FollowUsBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FollowUsBlockFilter>;
}

export interface QueryFooterArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryFooterCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<FooterFilter>;
}

export interface QueryHeroBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryHeroBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<HeroBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HeroBlockFilter>;
}

export interface QueryHowBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryHowBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<HowBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<HowBlockFilter>;
}

export interface QueryLineBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryLineBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<LineBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LineBlockFilter>;
}

export interface QueryLinkItemArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryLinkItemCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<LinkItemOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<LinkItemFilter>;
}

export interface QueryMemberArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryMemberCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<MemberOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<MemberFilter>;
}

export interface QueryNavigationBarArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryNavigationBarCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<NavigationBarOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<NavigationBarFilter>;
}

export interface QueryPageArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<PageFilter>;
}

export interface QuerySeoArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySeoCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SeoFilter>;
}

export interface QuerySocialNetworkArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySocialNetworkCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SocialNetworkOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SocialNetworkFilter>;
}

export interface QuerySpeakerArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySpeakerBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySpeakerBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SpeakerBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SpeakerBlockFilter>;
}

export interface QuerySpeakerCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SpeakerOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SpeakerFilter>;
}

export interface QuerySponsorArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySponsorBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySponsorBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SponsorBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SponsorBlockFilter>;
}

export interface QuerySponsorCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SponsorOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SponsorFilter>;
}

export interface QuerySponsorTypeArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySponsorTypeCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SponsorTypeOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SponsorTypeFilter>;
}

export interface QuerySubscribeBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QuerySubscribeBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<SubscribeBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<SubscribeBlockFilter>;
}

export interface QueryTalkArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryTalkCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TalkOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TalkFilter>;
}

export interface QueryTeamBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryTeamBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TeamBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TeamBlockFilter>;
}

export interface QueryTicketBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryTicketBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<TicketBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TicketBlockFilter>;
}

export interface QueryVolunteerBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryVolunteerBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<VolunteerBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<VolunteerBlockFilter>;
}

export interface QueryWhyBlockArgs {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

export interface QueryWhyBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<WhyBlockOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WhyBlockFilter>;
}

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
export interface SeoDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export interface SeoLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export interface SeoMetadataArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/seo) */
export interface SeoTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface SeoCollection {
  __typename?: "SeoCollection";
  items: Array<Maybe<Seo>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SeoFilter {
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
}

export interface SeoLinkingCollections {
  __typename?: "SeoLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface SeoLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SeoLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
export interface SocialNetworkIconArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export interface SocialNetworkLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export interface SocialNetworkNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/socialNetwork) */
export interface SocialNetworkUrlArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface SocialNetworkCollection {
  __typename?: "SocialNetworkCollection";
  items: Array<Maybe<SocialNetwork>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SocialNetworkFilter {
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
}

export interface SocialNetworkLinkingCollections {
  __typename?: "SocialNetworkLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  followUsBlockCollection?: Maybe<FollowUsBlockCollection>;
}

export interface SocialNetworkLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SocialNetworkLinkingCollectionsFollowUsBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
export interface SpeakerAboutArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerCardTypeArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerCityArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerCountryArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerGithubArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerPhotoArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerPositionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerTwitterArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerTypeArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speaker) */
export interface SpeakerWebArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

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
export interface SpeakerBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export interface SpeakerBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export interface SpeakerBlockSpeakersCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/speakerBlock) */
export interface SpeakerBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface SpeakerBlockCollection {
  __typename?: "SpeakerBlockCollection";
  items: Array<Maybe<SpeakerBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SpeakerBlockDescription {
  __typename?: "SpeakerBlockDescription";
  json: Scalars["JSON"];
  links: SpeakerBlockDescriptionLinks;
}

export interface SpeakerBlockDescriptionAssets {
  __typename?: "SpeakerBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SpeakerBlockDescriptionEntries {
  __typename?: "SpeakerBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SpeakerBlockDescriptionLinks {
  __typename?: "SpeakerBlockDescriptionLinks";
  assets: SpeakerBlockDescriptionAssets;
  entries: SpeakerBlockDescriptionEntries;
}

export interface SpeakerBlockFilter {
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
}

export interface SpeakerBlockLinkingCollections {
  __typename?: "SpeakerBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface SpeakerBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SpeakerBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface SpeakerBlockSpeakersCollection {
  __typename?: "SpeakerBlockSpeakersCollection";
  items: Array<Maybe<Speaker>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SpeakerCollection {
  __typename?: "SpeakerCollection";
  items: Array<Maybe<Speaker>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SpeakerFilter {
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
}

export interface SpeakerLinkingCollections {
  __typename?: "SpeakerLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
  speakerBlockCollection?: Maybe<SpeakerBlockCollection>;
}

export interface SpeakerLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SpeakerLinkingCollectionsEventCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SpeakerLinkingCollectionsSpeakerBlockCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
export interface SponsorDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export interface SponsorLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export interface SponsorLogoArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export interface SponsorNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsor) */
export interface SponsorTypeArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorBlock) */
export type SponsorBlock = Entry & {
  __typename?: "SponsorBlock";
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imageParamsDesktop?: Maybe<Scalars["String"]>;
  imageParamsMobile?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<SponsorBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<SponsorBlockTitle>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorBlock) */
export interface SponsorBlockImageArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorBlock) */
export interface SponsorBlockImageParamsDesktopArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorBlock) */
export interface SponsorBlockImageParamsMobileArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorBlock) */
export interface SponsorBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorBlock) */
export interface SponsorBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface SponsorBlockCollection {
  __typename?: "SponsorBlockCollection";
  items: Array<Maybe<SponsorBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SponsorBlockFilter {
  AND?: InputMaybe<Array<InputMaybe<SponsorBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageParamsDesktop?: InputMaybe<Scalars["String"]>;
  imageParamsDesktop_contains?: InputMaybe<Scalars["String"]>;
  imageParamsDesktop_exists?: InputMaybe<Scalars["Boolean"]>;
  imageParamsDesktop_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  imageParamsDesktop_not?: InputMaybe<Scalars["String"]>;
  imageParamsDesktop_not_contains?: InputMaybe<Scalars["String"]>;
  imageParamsDesktop_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  imageParamsMobile?: InputMaybe<Scalars["String"]>;
  imageParamsMobile_contains?: InputMaybe<Scalars["String"]>;
  imageParamsMobile_exists?: InputMaybe<Scalars["Boolean"]>;
  imageParamsMobile_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  imageParamsMobile_not?: InputMaybe<Scalars["String"]>;
  imageParamsMobile_not_contains?: InputMaybe<Scalars["String"]>;
  imageParamsMobile_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  image_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
}

export interface SponsorBlockLinkingCollections {
  __typename?: "SponsorBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  sponsorTypeCollection?: Maybe<SponsorTypeCollection>;
}

export interface SponsorBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SponsorBlockLinkingCollectionsSponsorTypeCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export enum SponsorBlockOrder {
  ImageParamsDesktopAsc = "imageParamsDesktop_ASC",
  ImageParamsDesktopDesc = "imageParamsDesktop_DESC",
  ImageParamsMobileAsc = "imageParamsMobile_ASC",
  ImageParamsMobileDesc = "imageParamsMobile_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export interface SponsorBlockTitle {
  __typename?: "SponsorBlockTitle";
  json: Scalars["JSON"];
  links: SponsorBlockTitleLinks;
}

export interface SponsorBlockTitleAssets {
  __typename?: "SponsorBlockTitleAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SponsorBlockTitleEntries {
  __typename?: "SponsorBlockTitleEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SponsorBlockTitleLinks {
  __typename?: "SponsorBlockTitleLinks";
  assets: SponsorBlockTitleAssets;
  entries: SponsorBlockTitleEntries;
}

export interface SponsorCollection {
  __typename?: "SponsorCollection";
  items: Array<Maybe<Sponsor>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SponsorDescription {
  __typename?: "SponsorDescription";
  json: Scalars["JSON"];
  links: SponsorDescriptionLinks;
}

export interface SponsorDescriptionAssets {
  __typename?: "SponsorDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SponsorDescriptionEntries {
  __typename?: "SponsorDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SponsorDescriptionLinks {
  __typename?: "SponsorDescriptionLinks";
  assets: SponsorDescriptionAssets;
  entries: SponsorDescriptionEntries;
}

export interface SponsorFilter {
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
}

export interface SponsorLinkingCollections {
  __typename?: "SponsorLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
}

export interface SponsorLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
  contributorsCollection?: Maybe<SponsorTypeContributorsCollection>;
  description?: Maybe<SponsorTypeDescription>;
  linkedFrom?: Maybe<SponsorTypeLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  sys: Sys;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export interface SponsorTypeContributorsCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export interface SponsorTypeDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export interface SponsorTypeLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export interface SponsorTypeNameArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/sponsorType) */
export interface SponsorTypePriceArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface SponsorTypeCollection {
  __typename?: "SponsorTypeCollection";
  items: Array<Maybe<SponsorType>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SponsorTypeContributorsCollection {
  __typename?: "SponsorTypeContributorsCollection";
  items: Array<Maybe<SponsorBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SponsorTypeDescription {
  __typename?: "SponsorTypeDescription";
  json: Scalars["JSON"];
  links: SponsorTypeDescriptionLinks;
}

export interface SponsorTypeDescriptionAssets {
  __typename?: "SponsorTypeDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface SponsorTypeDescriptionEntries {
  __typename?: "SponsorTypeDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface SponsorTypeDescriptionLinks {
  __typename?: "SponsorTypeDescriptionLinks";
  assets: SponsorTypeDescriptionAssets;
  entries: SponsorTypeDescriptionEntries;
}

export interface SponsorTypeFilter {
  AND?: InputMaybe<Array<InputMaybe<SponsorTypeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SponsorTypeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  contributorsCollection_exists?: InputMaybe<Scalars["Boolean"]>;
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
}

export interface SponsorTypeLinkingCollections {
  __typename?: "SponsorTypeLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface SponsorTypeLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SponsorTypeLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
export interface SubscribeBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/subscribeBlock) */
export interface SubscribeBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface SubscribeBlockCollection {
  __typename?: "SubscribeBlockCollection";
  items: Array<Maybe<SubscribeBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface SubscribeBlockFilter {
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
}

export interface SubscribeBlockLinkingCollections {
  __typename?: "SubscribeBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface SubscribeBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface SubscribeBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface Sys {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
}

export interface SysFilter {
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
}

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
export interface TalkDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export interface TalkDurationArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export interface TalkLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export interface TalkSpeakerArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/talk) */
export interface TalkTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface TalkCollection {
  __typename?: "TalkCollection";
  items: Array<Maybe<Talk>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface TalkDescription {
  __typename?: "TalkDescription";
  json: Scalars["JSON"];
  links: TalkDescriptionLinks;
}

export interface TalkDescriptionAssets {
  __typename?: "TalkDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface TalkDescriptionEntries {
  __typename?: "TalkDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface TalkDescriptionLinks {
  __typename?: "TalkDescriptionLinks";
  assets: TalkDescriptionAssets;
  entries: TalkDescriptionEntries;
}

export interface TalkFilter {
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
}

export interface TalkLinkingCollections {
  __typename?: "TalkLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
}

export interface TalkLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
  callToAction?: Maybe<LinkItem>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TeamBlockDescription>;
  linkedFrom?: Maybe<TeamBlockLinkingCollections>;
  membersCollection?: Maybe<TeamBlockMembersCollection>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export interface TeamBlockCallToActionArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export interface TeamBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export interface TeamBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export interface TeamBlockMembersCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/teamBlock) */
export interface TeamBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface TeamBlockCollection {
  __typename?: "TeamBlockCollection";
  items: Array<Maybe<TeamBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface TeamBlockDescription {
  __typename?: "TeamBlockDescription";
  json: Scalars["JSON"];
  links: TeamBlockDescriptionLinks;
}

export interface TeamBlockDescriptionAssets {
  __typename?: "TeamBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface TeamBlockDescriptionEntries {
  __typename?: "TeamBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface TeamBlockDescriptionLinks {
  __typename?: "TeamBlockDescriptionLinks";
  assets: TeamBlockDescriptionAssets;
  entries: TeamBlockDescriptionEntries;
}

export interface TeamBlockFilter {
  AND?: InputMaybe<Array<InputMaybe<TeamBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TeamBlockFilter>>>;
  callToAction?: InputMaybe<CfLinkItemNestedFilter>;
  callToAction_exists?: InputMaybe<Scalars["Boolean"]>;
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
}

export interface TeamBlockLinkingCollections {
  __typename?: "TeamBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface TeamBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface TeamBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface TeamBlockMembersCollection {
  __typename?: "TeamBlockMembersCollection";
  items: Array<Maybe<Member>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

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

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export type TicketBlock = Entry & {
  __typename?: "TicketBlock";
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TicketBlockDescription>;
  extendedDescription?: Maybe<TicketBlockExtendedDescription>;
  fullImage?: Maybe<Asset>;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<TicketBlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export interface TicketBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export interface TicketBlockExtendedDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export interface TicketBlockFullImageArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export interface TicketBlockIconArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export interface TicketBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** Ticket Card [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/ticketBlock) */
export interface TicketBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface TicketBlockCollection {
  __typename?: "TicketBlockCollection";
  items: Array<Maybe<TicketBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface TicketBlockDescription {
  __typename?: "TicketBlockDescription";
  json: Scalars["JSON"];
  links: TicketBlockDescriptionLinks;
}

export interface TicketBlockDescriptionAssets {
  __typename?: "TicketBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface TicketBlockDescriptionEntries {
  __typename?: "TicketBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface TicketBlockDescriptionLinks {
  __typename?: "TicketBlockDescriptionLinks";
  assets: TicketBlockDescriptionAssets;
  entries: TicketBlockDescriptionEntries;
}

export interface TicketBlockExtendedDescription {
  __typename?: "TicketBlockExtendedDescription";
  json: Scalars["JSON"];
  links: TicketBlockExtendedDescriptionLinks;
}

export interface TicketBlockExtendedDescriptionAssets {
  __typename?: "TicketBlockExtendedDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface TicketBlockExtendedDescriptionEntries {
  __typename?: "TicketBlockExtendedDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface TicketBlockExtendedDescriptionLinks {
  __typename?: "TicketBlockExtendedDescriptionLinks";
  assets: TicketBlockExtendedDescriptionAssets;
  entries: TicketBlockExtendedDescriptionEntries;
}

export interface TicketBlockFilter {
  AND?: InputMaybe<Array<InputMaybe<TicketBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TicketBlockFilter>>>;
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
}

export interface TicketBlockLinkingCollections {
  __typename?: "TicketBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
}

export interface TicketBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export enum TicketBlockOrder {
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
export interface VolunteerBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export interface VolunteerBlockExtendedDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export interface VolunteerBlockFullImageArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export interface VolunteerBlockIconArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export interface VolunteerBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/volunteerBlock) */
export interface VolunteerBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface VolunteerBlockCollection {
  __typename?: "VolunteerBlockCollection";
  items: Array<Maybe<VolunteerBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface VolunteerBlockDescription {
  __typename?: "VolunteerBlockDescription";
  json: Scalars["JSON"];
  links: VolunteerBlockDescriptionLinks;
}

export interface VolunteerBlockDescriptionAssets {
  __typename?: "VolunteerBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface VolunteerBlockDescriptionEntries {
  __typename?: "VolunteerBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface VolunteerBlockDescriptionLinks {
  __typename?: "VolunteerBlockDescriptionLinks";
  assets: VolunteerBlockDescriptionAssets;
  entries: VolunteerBlockDescriptionEntries;
}

export interface VolunteerBlockExtendedDescription {
  __typename?: "VolunteerBlockExtendedDescription";
  json: Scalars["JSON"];
  links: VolunteerBlockExtendedDescriptionLinks;
}

export interface VolunteerBlockExtendedDescriptionAssets {
  __typename?: "VolunteerBlockExtendedDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface VolunteerBlockExtendedDescriptionEntries {
  __typename?: "VolunteerBlockExtendedDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface VolunteerBlockExtendedDescriptionLinks {
  __typename?: "VolunteerBlockExtendedDescriptionLinks";
  assets: VolunteerBlockExtendedDescriptionAssets;
  entries: VolunteerBlockExtendedDescriptionEntries;
}

export interface VolunteerBlockFilter {
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
}

export interface VolunteerBlockLinkingCollections {
  __typename?: "VolunteerBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
}

export interface VolunteerBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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
export interface WhyBlockDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export interface WhyBlockExtendedDescriptionArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export interface WhyBlockFullImageArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export interface WhyBlockIconArgs {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export interface WhyBlockLinkedFromArgs {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
}

/** [See type definition](https://app.contentful.com/spaces/1kfhsqlc8ewi/content_types/whyBlock) */
export interface WhyBlockTitleArgs {
  locale?: InputMaybe<Scalars["String"]>;
}

export interface WhyBlockCollection {
  __typename?: "WhyBlockCollection";
  items: Array<Maybe<WhyBlock>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
}

export interface WhyBlockDescription {
  __typename?: "WhyBlockDescription";
  json: Scalars["JSON"];
  links: WhyBlockDescriptionLinks;
}

export interface WhyBlockDescriptionAssets {
  __typename?: "WhyBlockDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface WhyBlockDescriptionEntries {
  __typename?: "WhyBlockDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface WhyBlockDescriptionLinks {
  __typename?: "WhyBlockDescriptionLinks";
  assets: WhyBlockDescriptionAssets;
  entries: WhyBlockDescriptionEntries;
}

export interface WhyBlockExtendedDescription {
  __typename?: "WhyBlockExtendedDescription";
  json: Scalars["JSON"];
  links: WhyBlockExtendedDescriptionLinks;
}

export interface WhyBlockExtendedDescriptionAssets {
  __typename?: "WhyBlockExtendedDescriptionAssets";
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
}

export interface WhyBlockExtendedDescriptionEntries {
  __typename?: "WhyBlockExtendedDescriptionEntries";
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
}

export interface WhyBlockExtendedDescriptionLinks {
  __typename?: "WhyBlockExtendedDescriptionLinks";
  assets: WhyBlockExtendedDescriptionAssets;
  entries: WhyBlockExtendedDescriptionEntries;
}

export interface WhyBlockFilter {
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
}

export interface WhyBlockLinkingCollections {
  __typename?: "WhyBlockLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
}

export interface WhyBlockLinkingCollectionsEntryCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

export interface WhyBlockLinkingCollectionsPageCollectionArgs {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
}

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

export interface CfFollowUsBlockNestedFilter {
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
}

export interface CfFooterNestedFilter {
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
}

export interface CfHeroBlockNestedFilter {
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
  secondButton_exists?: InputMaybe<Scalars["Boolean"]>;
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
}

export interface CfLinkItemNestedFilter {
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
}

export interface CfNavigationBarNestedFilter {
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
}

export interface CfSeoNestedFilter {
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
}

export interface CfSpeakerBlockNestedFilter {
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
}

export interface CfSpeakerNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<CfSpeakerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSpeakerNestedFilter>>>;
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
}

export interface CfSubscribeBlockNestedFilter {
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
}

export interface CfTeamBlockNestedFilter {
  AND?: InputMaybe<Array<InputMaybe<CfTeamBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTeamBlockNestedFilter>>>;
  callToAction_exists?: InputMaybe<Scalars["Boolean"]>;
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
}
