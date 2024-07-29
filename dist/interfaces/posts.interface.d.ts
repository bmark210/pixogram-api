export interface ICreatePostDto {
    title: string;
    description: string;
    imgUrl: string;
}
export interface IUpdatePostDto {
    title?: string;
    description?: string;
    imgUrl?: string;
}
export interface IPostsFilter {
    searchText?: string;
    limit?: number;
    offset?: number;
    sortBy?: string;
    sortOrder?: string;
}
