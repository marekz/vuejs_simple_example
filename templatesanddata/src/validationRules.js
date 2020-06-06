function required(name) {
    return {
        validator: (value) => value !="" && value !== undefined && value !== null,
        message: `Pole ${name} nie może być puste`
    }
}

function minLength(name, minlenght) {
    return {
        validator: (value) => String(value).length >= minlenght,
        message: `Pole ${name} wymaga wprowadzenia minimum ${minlenght} znaków`
    }
}

function alpha(name) {
    return {
        validator: (value) => /^[a-zA-Z]*$/.test(value),
        message: `Pole ${name} może zawierać tylko litery`
    }
}

function numeric(name) {
    return {
        validator: (value) => /^[0-9]*$/.test(value),
        message: `Pole ${name} może zawierać tylko cyfry`
    }
}

function range(name, min, max) {
    return {
        validator: (value) => value >= min && value <= max,
        message: `Pole ${name} może zawierać wartość z zakresu między ${min} a ${max}`
    }
}
export default {
    name: [minLength("Nazwa", 3)],
    category: [required("Kategoria"), alpha("Kategoria")],
    price: [numeric("Cena"), range("cena", 1, 1000)]
}