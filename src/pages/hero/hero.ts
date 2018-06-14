/* Defines the hero entity */
export interface Hero {
    name: string;
    id: number;
    localized_name: string;
    image_url: string;
    hero_type: string;
    role: [{
        image_role: String;
        des_role: String;
    }]
}