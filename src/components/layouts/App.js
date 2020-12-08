<template>
<div class="main-div">
    <auto-progress/>
    <component :is="layout" v-if="layout == 'Home-Layout'" >
        <HomeLayout></HomeLayout>
    </component>
 
    <component :is="layout" v-if="layout == 'Inner-Page-Layout'" >
        <inner-page-layout></inner-page-layout>
    </component>
</div>
</template>


<script>

    import HomeLayout from "./HomeLayout.vue";
    import InnerPageLayout from "./InnerPageLayout.vue";


    const default_layout = 'Home-Layout';

    export default{

         components: {
            HomeLayout,
            InnerPageLayout,

        },

         computed: {
            layout() {
                return this.$route.meta.layout ? this.$route.meta.layout : default_layout;
            }
        },
          mounted() {
             $(document).scroll(function() {

                var $nav = $(".fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });

             $("#expandbtn").click(function() {
                $("#expandbtn").toggleClass("btn--expand");
                $("#expandDiv").toggleClass("mapExpand");
            });
        },
        
    }
</script>


