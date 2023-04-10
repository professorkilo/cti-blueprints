import { Outlook } from "../properties/Outlook";

export const OutlookSection = {
    name: "Outlook",
    layout: {
        rows: 1,
        cols: 1,
    },
    properties: [
        {
            ...Outlook,
            row: 1,
            col: 1
        }
    ]
}