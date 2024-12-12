export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-US',
        { style: 'currency', currency: 'USD' }
    ).format(amount)
}

export const formatDate = (dateStr: string): string => {
    const dateObj = new Date(dateStr)
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-Es', options).format(dateObj)
}