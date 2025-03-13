export const fetchData = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Lỗi khi fetch dữ liệu");
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
