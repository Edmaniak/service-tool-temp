<template>
  <div
    :style="{width}"
    class="input"
    :class="[{'input--error': errorMessages.length > 0} ]"
  >
    <label
      v-if="label"
      class="input__label"
      :for="name"
    >{{ label }}</label>
    <div class="relative">
      <input
        :id="name"
        ref="inputElement"
        :disabled="disabled"
        :readonly="readOnly"
        :autocomplete="autocomplete"
        :style="{width}"
        :placeholder="placeholder"
        class="input__input color-primary-focus-border"
        :value="modelValue"
        :type="dynamicType"
        :name="name"
        @input="input"
        @focus="focus"
        @blur="blur"
      >
      <div
        v-if="type === 'password' && modelValue"
        class="input__password-icon"
        @click="showPasswordSwitch"
      >
        <Icon
          v-if="!passwordShowed"
          :fill="primaryColor"
          icon="PassEye"
        />
        <Icon
          v-else
          :fill="primaryColor"
          icon="PassEyeCrossed"
        />
      </div>
      <Icon
        v-show="errorMessages.length > 0 && type !== 'password'"
        icon="Warning"
        :size="16"
        class="input__error-icon"
        :fill="Colors.RED"
      />
    </div>
    <ul
      v-show="errorMessages.length > 0"
      class="input__error"
    >
      <li
        v-for="error in errorMessages"
        :key="error"
      >
        {{ error.$message }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, computed, ref, inject} from 'vue';
import {useValidations} from '@/utils/Validations';
import Icon from '@/components/icons/Icon.vue';
import Colors from '@/enums/Colors';
import {useStore} from 'vuex';
import {Getters} from '@/store';
import ProvidedVars from '@/enums/ProvidedVars';
import {eventHub} from '@/utils/Utils';
import Events from '@/enums/Events';

export default defineComponent( {
  name: 'VInput',
  components: {Icon},
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    autocomplete: {
      type: String as PropType<'off' | 'on'>,
      default: 'off'
    },
    width: {
      type: String,
      default: '100%'
    },
    modelValue: {
      type: String,
      default: null
    }
  },
  emits: ['update:modelValue', 'blur'],
  setup (props, {emit}) {
    const validations = useValidations()
    const errorMessages = computed(() => validations && validations[props.name] ? validations[props.name].$errors : [])
    const passwordShowed = ref<boolean>(false)
    const dynamicType = ref<string>(props.type === 'number' ? 'text' : props.type)
    const focused = ref<boolean>(false)
    const inputElement = ref<HTMLElement | null>(null)

    const input = ($event: any) => {
      emit('update:modelValue', $event.target.value)
    }

    const blur = ($event: any) => {
      emit('blur', $event.target.value)
    }

    const focus = () => {
      focused.value = true
    }

    const showPasswordSwitch = () => {
      passwordShowed.value = !passwordShowed.value
      passwordShowed.value ? dynamicType.value = 'text' : dynamicType.value = 'password'
    }

    return {input, inputElement, focused, blur, focus, errorMessages, passwordShowed,  showPasswordSwitch, dynamicType, Colors}
  }
})
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.input {
  &--error {
    .input__input {
      border: $error 2px solid !important;
    }
  }
  &__error {
    margin-top: 10px;
    color: $error;
  }
  &__error-icon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
  &__password-icon {
    position: absolute;
    right: 18px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
  }
  &--md {
    .input__label {
      font-size: 14px;
      line-height: 160%;
      margin-bottom: 1.2rem;
      font-weight: 600;
    }
    .input__input {
      border-radius: 4px;
      font-size: 14px;
      line-height: 160%;
      padding: 0 1.2rem;
      height: 40px;
      width: 100%;
      &::-webkit-input-placeholder {
        font-size: 14px;

      }

      &:-ms-input-placeholder {
        font-size: 14px;

      }

      &::placeholder {
        font-size: 14px;

      }
    }
  }
  &--bordered {
    .input__input {
      border: 1px solid #B2BBC6;
      border-radius: 4px;
      background: #FFFFFF;
      padding-left: 16px;
      padding-right: 48px;
      height: 48px;
      color: $dark-blue;
      font-size: 16px;
      transition: all 0.1s;
      &:focus {
        border-width: 2px;
      }
    }
  }
  &--lg {
    .input__label {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.01em;
      margin-bottom: 1.5rem;
    }
    .input__input {
      padding: 2.2rem 2.3rem;
      border-radius: 6px;
      font-size: 16px;
      line-height: 19px;
      &::-webkit-input-placeholder {
        font-size: 16px;
        line-height: 19px;
      }

      &:-ms-input-placeholder {
        font-size: 16px;
        line-height: 19px;
      }

      &::placeholder {
        font-size: 16px;
        line-height: 19px;
      }
    }
  }
  &__label {
    display: block;
    color: #696F79;
  }
  &__input {
    border: none;
    background: $light-gray;
    font-weight: 500;
    color: #8692A6;
    font-family: $default-font-family;
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      color: #8692A6;
      font-weight: 500;
    }

    &:-ms-input-placeholder {
      color: #8692A6;
      font-weight: 500;
    }

    &::placeholder {
      color: #8692A6;
      font-weight: 500;
    }
  }
}
</style>