/* Defines the hero entity */
export interface Creep {
    name: string;
    id: number;

    image_url: string;
    hero_type: string;
    role: [{
        image_role: String;
        des_role: String;
    }]
}