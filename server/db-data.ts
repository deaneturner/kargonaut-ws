export const USERS = {
  1: {
    id: 1,
    email: 'test@kargonaut.herokuapp.com',
    password: 'test',
  },
};

export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(usr => usr.email === email);

  if (user && user.password === password) {
    return user;
  } else {
    return undefined;
  }
}

export const ITEMS: any = {
    1: {
        knTag: '928612d4-b4c2-4426-b80b-861e6cf5fe63',
        knLabel: 'Item row',
        knDescription: '',
        isSelected: false,
        checkbox: 'check_box_outline_blank',
        symbol: 'adjust',
        maxLikes: '',
        weightCode: 'filter_1',
        weightSymbol: 'device_unknown',
        weightAmount: '5.0'
    },
    2: {
        knTag: 'f0529af2-e961-4565-8515-bd453efca424',
        knLabel: 'Item row',
        knDescription: '',
        isSelected: false,
        checkbox: 'check_box_outline_blank',
        symbol: 'wb_sunny',
        maxLikes: '',
        weightCode: 'filter_1',
        weightSymbol: 'device_unknown',
        weightAmount: '5.0'
    },
    3: {
        knTag: '17e4371e-be8b-473e-9da3-7d6c757b7a3b',
        knLabel: 'Item row',
        knDescription: '',
        isSelected: false,
        checkbox: 'check_box_outline_blank',
        symbol: 'adjust',
        maxLikes: '',
        weightCode: 'filter_1',
        weightSymbol: 'device_unknown',
        weightAmount: '1.0'
    },
    4: {
        knTag: '844a9381-7a51-40e7-affb-fdf74eb280b3',
        knLabel: 'Item row',
        knDescription: '',
        isSelected: false,
        checkbox: 'check_box_outline_blank',
        symbol: 'adjust',
        maxLikes: '',
        weightCode: 'filter_1',
        weightSymbol: 'dock',
        weightAmount: '5.0'
    }
};
