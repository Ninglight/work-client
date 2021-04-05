declare namespace TaskCardModuleCssNamespace {
  export interface ITaskCardModuleCss {
    card: string;
    content: string;
    disabled: string;
    footer: string;
  }
}

declare const TaskCardModuleCssModule: TaskCardModuleCssNamespace.ITaskCardModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TaskCardModuleCssNamespace.ITaskCardModuleCss;
};

export = TaskCardModuleCssModule;
