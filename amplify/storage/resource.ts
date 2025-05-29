import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'pagesContent',
    access: (allow) => ({
        'pages/*': [allow.guest.to(['read'])],
    }),
});
