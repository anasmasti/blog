<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(menu_item, i) in menu_items"
          :key="i"
          :to="menu_item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ menu_item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="menu_item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app flat color="white">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu bottom min-width="150px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="purple" size="38">
              <span class="white--text ">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="px-3 text-center">
              <v-avatar color="purple">
                <span class="white--text">{{ user.initials }}</span>
              </v-avatar>
              <h3 class="mt-3">{{ user.fullName }}</h3>
              <p class="caption mt-1 mx-3">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text>
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text>
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Privacy Policy</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      menu_items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/home"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Blogs",
          to: "/blog"
        }
      ],
      user: {
        initials: "AM",
        fullName: "Anas Masti",
        email: "anasmasto@hotmail.com"
      },
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Bloguest"
    };
  }
};
</script>
<style lang=""></style>
