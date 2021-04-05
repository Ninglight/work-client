declare namespace TagModuleCssNamespace {
  export interface ITagModuleCss {
    tag: string;
  }
}

declare const TagModuleCssModule: TagModuleCssNamespace.ITagModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TagModuleCssNamespace.ITagModuleCss;
};

export = TagModuleCssModule;
