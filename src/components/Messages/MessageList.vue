<template>
    <section>
        <ul>
            <li v-for="message in Messages" :key="message.id">
                <div>
                    <h3><strong>{{ message.email }}</strong></h3>
                    <p>{{ message.message }}</p>
                </div>

            </li>
        </ul>
    </section>
</template>

<script>
export default{
    computed:{
        Messages(){
            return this.$store.getters['message/messages']
        }
    }
}
</script>