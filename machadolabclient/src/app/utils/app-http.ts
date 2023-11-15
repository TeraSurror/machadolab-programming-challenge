class AppHttp {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(endpoint: string): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, { cache: 'no-cache' });

        if (!response.ok) {
            throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
        }

        return response.json();
    }

    async post<T>(endpoint: string, data: any): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        const response = await fetch(url, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error posting data to ${url}: ${response.statusText}`);
        }

        return response.json();
    }

    // You can add similar methods for other HTTP methods like PUT, DELETE, etc.
}

export default AppHttp;
