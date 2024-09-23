export const MEAL = {
    BREAKFAST: 'Breakfast',
    LUNCH: 'Lunch',
    DINNER: 'Dinner',
    DESERT: 'Desert',
    JUNK: 'Junk',
}

export const STATUS = {
    PENDING: 'Pending',
    FAILED: 'Failed',
    PAID: 'Paid',
    DELIVERED: 'Delivered',
    CANCELED: 'Canceled',
}

export const COUNTRY = {
    NIGERIA: 'Nigeria',
    GHANA: 'Ghana',
    SOUTH_AFRICA: 'South-africa',
}

export const SORT_BY = {
    NEWEST_FIRST: 'Newest',
    OLDEST_FIRST: 'Oldest',
    ASCENDING: 'a-z',
    DESCENDING: 'z-a',
}

export const foodPrice = (price) => {
    const nairaAmount = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
    }).format((price).toFixed(2));
    return nairaAmount;
};

