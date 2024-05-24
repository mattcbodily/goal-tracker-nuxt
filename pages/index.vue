<script setup>
const { data } = await useFetch('/api/sheets?from=A1&to=B', {
  transform(data) {
    return data.map(row => ({
      name: row[0],
      range: row[1],
    }))
  }
})
</script>

<template>
  <div class='p-4'>
    <h2 class='mb-8 text-xl font-bold'>Your goals</h2>
    <div 
      v-for="goal in data"
      class='h-16 my-2 flex items-center justify-center border border-white rounded-md'
    >
      <p class='text-lg'>{{ goal.name }}</p>
    </div>
  </div>
</template>