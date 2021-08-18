// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import emitter from 'tiny-emitter/instance'
import Events from '@/enums/Events';
import Days from '@/model/Days';
import {Mutations} from '@/store';
import store from '@/store'
import DateTime from '@/model/DateTime';

export const countDecimals = (value: number) => {
    if (Math.floor(value) === value) return 0;
    return value.toString().split('.')[1].length || 0;
}

export const eventHub = {
    $on: (...args: any) => emitter.on(...args),
    $once: (...args: any) => emitter.once(...args),
    $off: (...args: any) => emitter.off(...args),
    $emit: (...args: any) => emitter.emit(...args),
}

export const openModal = (id: string, data = null) => {
    eventHub.$emit(Events.OPEN_MODAL, id, data)
    store.commit(Mutations.ADD_ACTIVE_MODAL, id)
}

export const closeModal = (id: string) => {
    eventHub.$emit(Events.CLOSE_MODAL, id)
}

export const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getRandomElement = (array: Array<any>) => {
    if (array.length > 0)
        return array[getRandomNumberBetween(0, array.length - 1)]
    throw new Error('Array is empty')
}

export const weekDays = [
    Days.MONDAY, Days.TUESDAY, Days.WEDNESDAY, Days.THURSDAY, Days.FRIDAY, Days.SATURDAY, Days.SUNDAY
]

export const getCurrentDay = (): Days => {
    const date = new Date();
    return weekDays[date.getDay() - 1]
}

export const getFormattedTimeFromDate = (date: Date): string => {
    return `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
}

export const getFormattedDateTime = (date: any): string => {
    if (!date) return ''
    return `${date.day}. ${date.month}. ${date.year} - ${date.hour < 10 ? '0' + date.hour : date.hour}:${date.minute < 10 ? '0' + date.minute : date.minute}`
}

export const getDateTimeFromDate = (date: any): DateTime => {
    console.log(date)
    return {
        minute: date.getMinutes(),
        hour: date.getHours(),
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
}

export const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

export const capsFirst = (string: any): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const count = (possibleValues: Array<string>, receivedValues: Array<string>): number => {
    let count = 0
    possibleValues.forEach(item => {if (receivedValues.includes(item)) count++})
    return count
}

export const getQueryStringValue = (key: string) => {
    /* eslint-disable */
    return decodeURIComponent(window.location.search.replace(new RegExp('^(?:.*[&\\?]' + encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') + '(?:\\=([^&]*))?)?.*$', 'i'), '$1'));
}

export const isElectron = (): boolean => {
    // Renderer process
    //@ts-ignore
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    //@ts-ignore
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    //@ts-ignore
    return typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0;

}

export const isValidDate = (d: any): boolean => {
    if (Object.prototype.toString.call(d) === "[object Date]") {
        return !isNaN(d.getTime());
    } else {
        return false
    }
}



