export const calculateTotalAvailableSeats = (icuData) => {
    return icuData.reduce((total, icu) => total + parseInt(icu.seat), 0);
};