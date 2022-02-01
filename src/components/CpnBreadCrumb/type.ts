export interface IBreadcrumb {
  title: string
  to: string
}

export interface IBreadcrumbList {
  [key: string]: IBreadcrumb
}
