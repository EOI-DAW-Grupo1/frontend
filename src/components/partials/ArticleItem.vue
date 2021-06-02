<template>
  <div class="column is-4">
    <div class="services-wrap is-flex">

        <div class="text p-4">
            <h3>{{value.title}}</h3>
            <h4>{{value.published_at}}</h4>
            <h4>{{value.category}}</h4>
            <p>{{value.excerpt}}</p>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    name: "ArticleItem",
    props: {
        value: Object
    }
}
</script>