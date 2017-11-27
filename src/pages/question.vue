<template>
  <div>
    <time-score></time-score>
    <question-item></question-item>
  </div>
</template>

<script>
  import timeScore from '@/components/time'
  import questionItem from '@/components/questionItem'
  export default {
    components: {
      'time-score': timeScore,
      'question-item': questionItem
    },
    data () {
      return {}
    }
  }
</script>
