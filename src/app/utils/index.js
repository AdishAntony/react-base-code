import { COMMON_TABLE_LIST_DATE_FORMAT } from './constants';
import Storage from './Storage';
import moment from 'moment';

const BASIC_META_DATA = [
    {
        name: 'description',
        content:
            "commodityonline.com is India's most authentic online marketplace for buying and selling commodities"
    },
    {
        name: 'robots',
        content: 'index'
    },
    {
        name: 'google-site-verification',
        content: 'EhMh7pOhOgAOPFMgWF9NUto7X8e_1AXSTPb9RiR0tSM'
    },
    {
        name: 'ahrefs-site-verification',
        content: 'c6de5be9cc2c337d6a0acc9e12d652ffde6d95caa3f8927f64906f97782ce7c0'
    },
    {
        name: 'fb:pages',
        content: '54341214908'
    },
    {
        name: 'og:title',
        content: 'Commodity Online -Connect with agriculture Suppliers & Buyers'
    },
    {
        name: 'og:site_name',
        content: 'commodityonline'
    },
    {
        name: 'og:url',
        content: 'https://www.commodityonline.com/'
    },
    {
        name: 'og:image',
        content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
    },
    {
        name: 'og:type',
        content: 'website'
    },
    {
        name: 'og:description',
        content:
            "commodityonline.com is India's most authentic online marketplace for buying and selling commodities."
    },
    {
        name: 'twitter:card',
        content: 'summary_large_image'
    },
    {
        name: 'twitter:site',
        content: '_@commodityonline'
    },
    {
        name: 'twitter:title',
        content: 'Commodity Online -Connect with agriculture Suppliers & Buyers'
    },
    {
        name: 'twitter:description',
        content:
            "commodityonline.com is India's most authentic online marketplace for buying and selling commodities"
    },
    {
        name: 'twitter:image',
        content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
    }
];

const BASIC_MAIN_SEO_COMPONENTS = {
    title: 'CommodityOnline',
    url: 'https://www.commodityonline.com/'
};

export const isLogin = () => {
    const token = Storage.getToken();
    if (token != '' && token != undefined) {
        return true;
    }

    return false;
};

export const getCurrencySymbol = value => {
    return '₹ ' + value;
};

export const getDateFormatted = value => {
    return value;
};

export const logout = () => {
    Storage.clearAll();
};

export const formatDBDate = (value, format = COMMON_TABLE_LIST_DATE_FORMAT) => {
    return moment(value).format(format);
};

export const getBase64 = file => {
    return new Promise(resolve => {
        let baseURL = '';
        // Make new FileReader
        let reader = new FileReader();
        reader.fileName = file.name;

        // Convert the file to base64 text
        reader.readAsDataURL(file);

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object here
            baseURL = reader.result;
            resolve({ baseURL: baseURL, fileName: reader.fileName });
        };
    });
};

export const b64toBlob = (b64Data, contentType) => {
    contentType = contentType || '';
    let sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    let byteCharacters = window.atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    let blob = new Blob(byteArrays, { type: contentType });
    return blob;
};

export const randomArrayShuffle = array => {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

export const getSeoComponents = (type, params) => {
    let basicSeoComponent = { ...BASIC_MAIN_SEO_COMPONENTS, metaData: BASIC_META_DATA };
    switch (type) {
        case 'home':
            basicSeoComponent = { ...BASIC_MAIN_SEO_COMPONENTS, metaData: getHomePageMetaData() };
            basicSeoComponent.title = 'Commodity Online -Connect with agriculture Suppliers & Buyers';
            basicSeoComponent.schema = getHomePageSchema();
            return basicSeoComponent;
        case 'buyer':
            basicSeoComponent = { ...BASIC_MAIN_SEO_COMPONENTS, metaData: getBuyerPageMetaData() };
            basicSeoComponent.title = 'Agri Commodity Wholesale Buyers & Buy Leads';
            basicSeoComponent.url = 'https://www.commodityonline.com/buyers';
            basicSeoComponent.schema = getCategoryPageSchema();
            return basicSeoComponent;
        case 'seller':
            basicSeoComponent = { ...BASIC_MAIN_SEO_COMPONENTS, metaData: getSellerPageMetaData() };
            basicSeoComponent.title = 'Agri Commodity Suppliers & Exporters';
            basicSeoComponent.url = 'https://www.commodityonline.com/suppliers';
            basicSeoComponent.schema = getCategoryPageSchema();
            return basicSeoComponent;
        case 'detail':
            basicSeoComponent = { ...BASIC_MAIN_SEO_COMPONENTS, metaData: getHomePageMetaData() };
            basicSeoComponent.title = 'Commodity Online -Connect with agriculture Suppliers & Buyers';
            basicSeoComponent.schema = getProductPageSchema(params);
            return basicSeoComponent;
        case 'mandi':
            basicSeoComponent = { ...BASIC_MAIN_SEO_COMPONENTS, metaData: getMandiPageMetaData() };
            basicSeoComponent.title = 'Mandi Bhav - Today Mandi Rates in India';
            basicSeoComponent.url = 'https://www.commodityonline.com/mandiprices';
            basicSeoComponent.schema = getMandiPageSchema(params);
            return basicSeoComponent;
        case 'mandidetail':
            basicSeoComponent = {
                ...BASIC_MAIN_SEO_COMPONENTS,
                metaData: getMandiDetailsPageMetaData(params)
            };
            basicSeoComponent.title = params.commodity + ' mandi price in ' + params.location;
            basicSeoComponent.url = params.url;
            basicSeoComponent.schema = getMandiPageSchema(params);
            return basicSeoComponent;

        default:
            return basicSeoComponent;
    }
};

export const getHomePageMetaData = () => {
    return [...BASIC_META_DATA];
};

export const getBuyerPageMetaData = () => {
    return [
        {
            name: 'description',
            content: 'Get Agri Commodity Buy Leads from Buyers in India'
        },
        {
            name: 'robots',
            content: 'index'
        },
        {
            name: 'google-site-verification',
            content: 'EhMh7pOhOgAOPFMgWF9NUto7X8e_1AXSTPb9RiR0tSM'
        },
        {
            name: 'ahrefs-site-verification',
            content: 'c6de5be9cc2c337d6a0acc9e12d652ffde6d95caa3f8927f64906f97782ce7c0'
        },
        {
            name: 'fb:pages',
            content: '54341214908'
        },
        {
            name: 'og:title',
            content: 'Agri Commodity Wholesale Buyers & Buy Leads'
        },
        {
            name: 'og:site_name',
            content: 'commodityonline'
        },
        {
            name: 'og:url',
            content: 'https://www.commodityonline.com/buyers'
        },
        {
            name: 'og:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        },
        {
            name: 'og:type',
            content: 'website'
        },
        {
            name: 'og:description',
            content: 'Get Agri Commodity Buy Leads from Buyers in India.'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:site',
            content: '_@commodityonline'
        },
        {
            name: 'twitter:title',
            content: 'Agri Commodity Wholesale Buyers & Buy Leads'
        },
        {
            name: 'twitter:description',
            content: 'Get Agri Commodity Buy Leads from Buyers in India'
        },
        {
            name: 'twitter:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        }
    ];
};

export const getSellerPageMetaData = () => {
    return [
        {
            name: 'description',
            content: 'Get Agri Commodity Suppliers & Exporters List in India'
        },
        {
            name: 'robots',
            content: 'index'
        },
        {
            name: 'google-site-verification',
            content: 'EhMh7pOhOgAOPFMgWF9NUto7X8e_1AXSTPb9RiR0tSM'
        },
        {
            name: 'ahrefs-site-verification',
            content: 'c6de5be9cc2c337d6a0acc9e12d652ffde6d95caa3f8927f64906f97782ce7c0'
        },
        {
            name: 'fb:pages',
            content: '54341214908'
        },
        {
            name: 'og:title',
            content: 'Agri Commodity Suppliers & Exporters'
        },
        {
            name: 'og:site_name',
            content: 'commodityonline'
        },
        {
            name: 'og:url',
            content: 'https://www.commodityonline.com/suppliers'
        },
        {
            name: 'og:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        },
        {
            name: 'og:type',
            content: 'website'
        },
        {
            name: 'og:description',
            content: 'Get Agri Commodity Suppliers & Exporters List in India'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:site',
            content: '_@commodityonline'
        },
        {
            name: 'twitter:title',
            content: 'Agri Commodity Suppliers & Exporters'
        },
        {
            name: 'twitter:description',
            content: 'Get Agri Commodity Suppliers & Exporters List in India'
        },
        {
            name: 'twitter:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        }
    ];
};

export const getMandiPageMetaData = () => {
    return [
        {
            name: 'description',
            content:
                'Get daily mandi bhav & Latest prices for 200+ commodities from more than 2000 markets in India'
        },
        {
            name: 'robots',
            content: 'index'
        },
        {
            name: 'google-site-verification',
            content: 'EhMh7pOhOgAOPFMgWF9NUto7X8e_1AXSTPb9RiR0tSM'
        },
        {
            name: 'ahrefs-site-verification',
            content: 'c6de5be9cc2c337d6a0acc9e12d652ffde6d95caa3f8927f64906f97782ce7c0'
        },
        {
            name: 'fb:pages',
            content: '54341214908'
        },
        {
            name: 'og:title',
            content: 'Mandi Bhav - Today Mandi Rates in India'
        },
        {
            name: 'og:site_name',
            content: 'commodityonline'
        },
        {
            name: 'og:url',
            content: 'https://www.commodityonline.com/mandiprices'
        },
        {
            name: 'og:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        },
        {
            name: 'og:type',
            content: 'website'
        },
        {
            name: 'og:description',
            content:
                'Get daily mandi bhav & Latest prices for 200+ commodities from more than 2000 markets in India'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:site',
            content: '_@commodityonline'
        },
        {
            name: 'twitter:title',
            content: 'Mandi Bhav - Today Mandi Rates in India'
        },
        {
            name: 'twitter:description',
            content:
                'Get daily mandi bhav & Latest prices for 200+ commodities from more than 2000 markets in India'
        },
        {
            name: 'twitter:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        }
    ];
};

export const getMandiDetailsPageMetaData = params => {
    return [
        {
            name: 'description',
            content: params.commodity + ' mandi price in ' + params.location + ' - commodityonline.com'
        },
        {
            name: 'robots',
            content: 'index'
        },
        {
            name: 'google-site-verification',
            content: 'EhMh7pOhOgAOPFMgWF9NUto7X8e_1AXSTPb9RiR0tSM'
        },
        {
            name: 'ahrefs-site-verification',
            content: 'c6de5be9cc2c337d6a0acc9e12d652ffde6d95caa3f8927f64906f97782ce7c0'
        },
        {
            name: 'fb:pages',
            content: '54341214908'
        },
        {
            name: 'og:title',
            content: params.commodity + ' mandi price in ' + params.location + ' - commodityonline.com'
        },
        {
            name: 'og:site_name',
            content: 'commodityonline'
        },
        {
            name: 'og:url',
            content: params.url
        },
        {
            name: 'og:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        },
        {
            name: 'og:type',
            content: 'website'
        },
        {
            name: 'og:description',
            content: params.commodity + ' mandi price in ' + params.location + ' - commodityonline.com'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:site',
            content: '_@commodityonline'
        },
        {
            name: 'twitter:title',
            content: params.commodity + ' mandi price in ' + params.location + ' - commodityonline.com'
        },
        {
            name: 'twitter:description',
            content: params.commodity + ' mandi price in ' + params.location + ' - commodityonline.com'
        },
        {
            name: 'twitter:image',
            content: 'https://www.commodityonline.com/newimages/images/LOGO.png'
        }
    ];
};

export const getHomePageSchema = () => {
    return [{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'commodityonline',
        url: 'https://www.commodityonline.com/',
        logo: {
            '@type': 'ImageObject',
            url: 'https://www.commodityonline.com/newimages/images/LOGO.png',
            width: 112,
            height: 112
        },
        sameAs: [
            'https://www.facebook.com/CommodityOnline',
            'https://www.instagram.com/commodityonline/',
            'https://twitter.com/commodityonline'
        ]
    }];
};

export const getCategoryPageSchema = () => {
    return [{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                url: 'url1',
                name: 'NMS Unpolished Toor Dal'
            },
            {
                '@type': 'ListItem',
                position: 2,
                url: 'url2',
                name: 'Toor Dal Pulses'
            },
            {
                '@type': 'ListItem',
                position: 3,
                url: 'url3',
                name: 'Toor DHALL (( Bulk Industrial Packing))'
            }
        ]
    }];
};

export const getProductPageSchema = (params) => {
    return [{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@id': 'https://www.commodityonline.com/',
                    name: 'commodityonline'
                }
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@id': 'https://www.commodityonline.com/sellers/' + params.name + '/' + params.id,
                    name: params.name
                }
            }
        ]
    }];
};

export const getMandiPageSchema = (params) => {
    return [{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@id': 'https://www.commodityonline.com/',
                    name: 'commodityonline'
                }
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@id': 'https://www.commodityonline.com/mandi/' + params.name,
                    name: params.name
                }
            }
        ]
    }];
};

export const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data);
        }
    });
}
