import axios from "axios";

const instance = axios.create({
    baseURL: "https://europe-central2-beecomm-menu.cloudfunctions.net/menu/62b408b5a987e705016e13b6"
})
export const menuService = {
    getMenu() {
        return instance.get("/", {
            headers: {
                access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjMxNTg3OTMxMTQsImNsaWVudCI6eyJfaWQiOiI2MTkwYzIwZjJkM2M3OTk1NTBhZjk0NDQiLCJjbGllbnRfbmFtZSI6IldJWCIsImhlYk5hbWUiOiJXSVgiLCJ0eXBlIjoiZGVsaXZlcnkiLCJpc0FjdGl2ZSI6dHJ1ZSwicmVnaXN0cmF0aW9uRGF0ZSI6IjE0LTExLTIwMjEgMTA6MDA6MTUiLCJsZXZlbCI6NSwicm9sZSI6ImFwcC1jbGllbnQiLCJjbGllbnRfaWQiOiIwVkM3eE9lT2pmUzMwMHNUbVF5V0tHRHFMbXF6Y3dLWjhZU29DaUlidkdyYkdMT1E5Z1lrT1JqU0NmNG1vSXdYIiwiY2xpZW50X3NlY3JldCI6IkV2dUFKNWNnTmlEd2FzS3Z6VlpjWklzM090MDJLOUNzQ2R2SUZkUnZ3S0dkRU1sUjlFeWJGbTNsbDBERTAyaGMifX0.KX7tb5gVoM_dxKonG7gZXbW49spExyVwVPcOmWJAXCg",
            }
        })
    }
}