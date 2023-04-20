export class TotsNotification {
    id?: number;
    creator_id: number = 0;
    user_id: number = 0;
    type_id: number = 0;
    item_id: number = 0;
    data: any;
    caption: string = "";
    is_read?: boolean = false;
    is_email?: boolean = false;
    title: string = "";
    photo?: string = "";
    path?: string = "";
    breadcrumb?: string = "";
    created_at: string = "";
}