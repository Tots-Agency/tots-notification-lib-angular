export class TotsNotification {
    id?: number;
    creator_id: number = 0;
    user_id: number = 0;
    type_id: number = 0;
    item_id: number = 0;
    data: any;
    caption: string = "";
    is_read: number = 0;
    is_email: number = 0;
    title: string = "";
    photo?: string = "";
    path?: string = "";
    breadcrumb?: string = "";
    created_at: string = "";

    photoTooltip?: string = "";
}