export interface tab {
  title: string;
  contentList: content[];
}

export interface content {
  content: string;
  link?: string | null | undefined;
}
