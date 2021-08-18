export default (t: any) =>  {
    return  {mixed: {
            required: t('fields.required'),
            min: `${t('fields.minLength')}` + ' ${min}'
        },
        string: {
            required: t('fields.required') ,
            min: `${t('fields.minLength')}` + ' ${min}'
        }
    }
}