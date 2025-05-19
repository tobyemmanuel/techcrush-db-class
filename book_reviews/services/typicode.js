export default class TypiCode{
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    async getPosts() {
        const response = await fetch(`${this.baseUrl}/posts`);
        return await response.json();
    }

    async getPost(id) {
        const response = await fetch(`${this.baseUrl}/posts/${id}`);
        return await response.json();
    }

    async getComments(postId) {
        const response = await fetch(`${this.baseUrl}/posts/${postId}/comments`);
        return await response.json();
    }

    async createPost(data) {
        const response = await fetch(`${this.baseUrl}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async updatePost(id, data) {
        const response = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async patchPost(id, data) {
        const response = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

    async deletePost(id) {
        const response = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
}