import { SupportType } from './SupportType';
import { PersonType } from './PersonType';

export type ResponseType = {
    data: PersonType[],
    page: number,
    per_page: number,
    support: SupportType,
    total: number,
    total_pages: number
}