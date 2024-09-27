export const formatPrice = (price) => {
    const nairaAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
    }).format((price / 100).toFixed(2));
    return nairaAmount;
};

// export const foodPrice = (price) => {
//     const nairaAmount = new Intl.NumberFormat('en-NG', {
//         style: 'currency',
//         currency: 'NGN',
//     }).format((price).toFixed(2));
//     return nairaAmount;
// };