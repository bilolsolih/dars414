export interface PaginatedResult<T> {
    totalPages: number;
    previousPage?: number;
    currentPage: number;
    nextPage?: number;
    totalCount: number;
    data: T[];
}
