declare module '*.scss' {
    interface IClassNames {
      [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.css'
declare module '*[FTName].module.scss'