(function(window, angular, $, Liferay, undefined) {
  'use strict';
  var module = angular.module("yog", []);
  module
    .factory("JournalArticle", function(ngLiferayHttp, ngLiferayAuth) {
      var R = ngLiferayHttp('/api/jsonws/invoke', {
        /**
         *
         * @param groupId long
         * @param folderId long
         * @param classNameId long
         * @param classPK long
         * @param articleId java.lang.String
         * @param autoArticleId boolean
         * @param titleMap java.util.Map
         * @param descriptionMap java.util.Map
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param layoutUuid java.lang.String
         * @param displayDateMonth int
         * @param displayDateDay int
         * @param displayDateYear int
         * @param displayDateHour int
         * @param displayDateMinute int
         * @param expirationDateMonth int
         * @param expirationDateDay int
         * @param expirationDateYear int
         * @param expirationDateHour int
         * @param expirationDateMinute int
         * @param neverExpire boolean
         * @param reviewDateMonth int
         * @param reviewDateDay int
         * @param reviewDateYear int
         * @param reviewDateHour int
         * @param reviewDateMinute int
         * @param neverReview boolean
         * @param indexable boolean
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        addArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/add-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         * @param classNameId long
         * @param classPK long
         * @param articleId java.lang.String
         * @param autoArticleId boolean
         * @param titleMap java.util.Map
         * @param descriptionMap java.util.Map
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param layoutUuid java.lang.String
         * @param displayDateMonth int
         * @param displayDateDay int
         * @param displayDateYear int
         * @param displayDateHour int
         * @param displayDateMinute int
         * @param expirationDateMonth int
         * @param expirationDateDay int
         * @param expirationDateYear int
         * @param expirationDateHour int
         * @param expirationDateMinute int
         * @param neverExpire boolean
         * @param reviewDateMonth int
         * @param reviewDateDay int
         * @param reviewDateYear int
         * @param reviewDateHour int
         * @param reviewDateMinute int
         * @param neverReview boolean
         * @param indexable boolean
         * @param smallImage boolean
         * @param smallImageURL java.lang.String
         * @param smallFile java.io.File
         * @param images java.util.Map
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        addArticle_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/add-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param oldArticleId java.lang.String
         * @param newArticleId java.lang.String
         * @param autoArticleId boolean
         * @param version double
         */
        copyArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/copy-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        deleteArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/delete-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        deleteArticle_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/delete-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        expireArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/expire-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        expireArticle_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/expire-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         */
        fetchArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/fetch-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param id long
         */
        getArticle: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         */
        getArticle_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         */
        getArticle_2: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param className java.lang.String
         * @param classPK long
         */
        getArticle_3: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param urlTitle java.lang.String
         */
        getArticleByUrlTitle: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article-by-url-title": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param languageId java.lang.String
         * @param themeDisplay com.liferay.portal.theme.ThemeDisplay
         */
        getArticleContent: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article-content": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param languageId java.lang.String
         * @param themeDisplay com.liferay.portal.theme.ThemeDisplay
         */
        getArticleContent_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-article-content": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         */
        getArticles: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        getArticles_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        getArticlesByArticleId: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-by-article-id": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param layoutUuid java.lang.String
         */
        getArticlesByLayoutUuid: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-by-layout-uuid": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param ddmStructureKey java.lang.String
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        getArticlesByStructureId: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-by-structure-id": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param classNameId long
         * @param ddmStructureKey java.lang.String
         * @param status int
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        getArticlesByStructureId_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-by-structure-id": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         */
        getArticlesCount: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         * @param status int
         */
        getArticlesCount_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         */
        getArticlesCountByArticleId: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-count-by-article-id": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param ddmStructureKey java.lang.String
         */
        getArticlesCountByStructureId: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-count-by-structure-id": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param classNameId long
         * @param ddmStructureKey java.lang.String
         * @param status int
         */
        getArticlesCountByStructureId_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-articles-count-by-structure-id": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param urlTitle java.lang.String
         */
        getDisplayArticleByUrlTitle: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-display-article-by-url-title": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderIds java.util.List
         */
        getFoldersAndArticlesCount: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-folders-and-articles-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param userId long
         * @param rootFolderId long
         * @param start int
         * @param end int
         * @param orderByComparator com.liferay.portal.kernel.util.OrderByComparator
         */
        getGroupArticles: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-group-articles": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param userId long
         * @param rootFolderId long
         * @param status int
         * @param start int
         * @param end int
         * @param orderByComparator com.liferay.portal.kernel.util.OrderByComparator
         */
        getGroupArticles_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-group-articles": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param userId long
         * @param rootFolderId long
         * @param status int
         * @param includeOwner boolean
         * @param start int
         * @param end int
         * @param orderByComparator com.liferay.portal.kernel.util.OrderByComparator
         */
        getGroupArticles_2: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-group-articles": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param userId long
         * @param rootFolderId long
         */
        getGroupArticlesCount: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-group-articles-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param userId long
         * @param rootFolderId long
         * @param status int
         */
        getGroupArticlesCount_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-group-articles-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param userId long
         * @param rootFolderId long
         * @param status int
         * @param includeOwner boolean
         */
        getGroupArticlesCount_2: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-group-articles-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param resourcePrimKey long
         */
        getLatestArticle: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-latest-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param status int
         */
        getLatestArticle_1: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-latest-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param className java.lang.String
         * @param classPK long
         */
        getLatestArticle_2: {
          method: "GET",
          params: {
            cmd: {
              "/journalarticle/get-latest-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param newFolderId long
         */
        moveArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/move-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param newFolderId long
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        moveArticleFromTrash: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/move-article-from-trash": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param resourcePrimKey long
         * @param newFolderId long
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        moveArticleFromTrash_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/move-article-from-trash": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         */
        moveArticleToTrash: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/move-article-to-trash": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param languageId java.lang.String
         */
        removeArticleLocale: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/remove-article-locale": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param languageId java.lang.String
         */
        removeArticleLocale_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/remove-article-locale": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param resourcePrimKey long
         */
        restoreArticleFromTrash: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/restore-article-from-trash": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         */
        restoreArticleFromTrash_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/restore-article-from-trash": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param groupId long
         * @param folderIds java.util.List
         * @param classNameId long
         * @param keywords java.lang.String
         * @param version java.lang.Double
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param displayDateGT java.util.Date
         * @param displayDateLT java.util.Date
         * @param status int
         * @param reviewDate java.util.Date
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        search: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param groupId long
         * @param folderIds java.util.List
         * @param classNameId long
         * @param articleId java.lang.String
         * @param version java.lang.Double
         * @param title java.lang.String
         * @param description java.lang.String
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param displayDateGT java.util.Date
         * @param displayDateLT java.util.Date
         * @param status int
         * @param reviewDate java.util.Date
         * @param andOperator boolean
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        search_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param groupId long
         * @param folderIds java.util.List
         * @param classNameId long
         * @param articleId java.lang.String
         * @param version java.lang.Double
         * @param title java.lang.String
         * @param description java.lang.String
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKeys [Ljava.lang.String;
         * @param ddmTemplateKeys [Ljava.lang.String;
         * @param displayDateGT java.util.Date
         * @param displayDateLT java.util.Date
         * @param status int
         * @param reviewDate java.util.Date
         * @param andOperator boolean
         * @param start int
         * @param end int
         * @param obc com.liferay.portal.kernel.util.OrderByComparator
         */
        search_2: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param creatorUserId long
         * @param status int
         * @param start int
         * @param end int
         */
        search_3: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param groupId long
         * @param folderIds java.util.List
         * @param classNameId long
         * @param keywords java.lang.String
         * @param version java.lang.Double
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param displayDateGT java.util.Date
         * @param displayDateLT java.util.Date
         * @param status int
         * @param reviewDate java.util.Date
         */
        searchCount: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param groupId long
         * @param folderIds java.util.List
         * @param classNameId long
         * @param articleId java.lang.String
         * @param version java.lang.Double
         * @param title java.lang.String
         * @param description java.lang.String
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param displayDateGT java.util.Date
         * @param displayDateLT java.util.Date
         * @param status int
         * @param reviewDate java.util.Date
         * @param andOperator boolean
         */
        searchCount_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param companyId long
         * @param groupId long
         * @param folderIds java.util.List
         * @param classNameId long
         * @param articleId java.lang.String
         * @param version java.lang.Double
         * @param title java.lang.String
         * @param description java.lang.String
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKeys [Ljava.lang.String;
         * @param ddmTemplateKeys [Ljava.lang.String;
         * @param displayDateGT java.util.Date
         * @param displayDateLT java.util.Date
         * @param status int
         * @param reviewDate java.util.Date
         * @param andOperator boolean
         */
        searchCount_2: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/search-count": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         */
        subscribe: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/subscribe": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         */
        unsubscribe: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/unsubscribe": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param userId long
         * @param groupId long
         * @param folderId long
         * @param articleId java.lang.String
         * @param version double
         * @param titleMap java.util.Map
         * @param descriptionMap java.util.Map
         * @param content java.lang.String
         * @param layoutUuid java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        updateArticle: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         * @param articleId java.lang.String
         * @param version double
         * @param titleMap java.util.Map
         * @param descriptionMap java.util.Map
         * @param content java.lang.String
         * @param type java.lang.String
         * @param ddmStructureKey java.lang.String
         * @param ddmTemplateKey java.lang.String
         * @param layoutUuid java.lang.String
         * @param displayDateMonth int
         * @param displayDateDay int
         * @param displayDateYear int
         * @param displayDateHour int
         * @param displayDateMinute int
         * @param expirationDateMonth int
         * @param expirationDateDay int
         * @param expirationDateYear int
         * @param expirationDateHour int
         * @param expirationDateMinute int
         * @param neverExpire boolean
         * @param reviewDateMonth int
         * @param reviewDateDay int
         * @param reviewDateYear int
         * @param reviewDateHour int
         * @param reviewDateMinute int
         * @param neverReview boolean
         * @param indexable boolean
         * @param smallImage boolean
         * @param smallImageURL java.lang.String
         * @param smallFile java.io.File
         * @param images java.util.Map
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        updateArticle_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param folderId long
         * @param articleId java.lang.String
         * @param version double
         * @param content java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        updateArticle_2: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-article": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param locale java.util.Locale
         * @param title java.lang.String
         * @param description java.lang.String
         * @param content java.lang.String
         * @param images java.util.Map
         */
        updateArticleTranslation: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-article-translation": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param locale java.util.Locale
         * @param title java.lang.String
         * @param description java.lang.String
         * @param content java.lang.String
         * @param images java.util.Map
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        updateArticleTranslation_1: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-article-translation": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param content java.lang.String
         */
        updateContent: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-content": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
        /**
         *
         * @param groupId long
         * @param articleId java.lang.String
         * @param version double
         * @param status int
         * @param articleURL java.lang.String
         * @param serviceContext com.liferay.portal.service.ServiceContext
         */
        updateStatus: {
          method: "POST",
          params: {
            cmd: {
              "/journalarticle/update-status": {}
            },
            p_auth: ngLiferayAuth.authToken
          }
        },
      });
      console.log(R)
      return R;
    });
  module
    .factory("AuthService", function(ngLiferayHttp, HelperService) {
      var loginURL = '/web/guest/home?p_p_id=58&p_p_lifecycle=1&p_p_state=maximized&p_p_mode=view&_58_struts_action=%2Flogin%2Flogin',
        logoutURL = '/c/portal/logout';
      var R = ngLiferayHttp('', {
        login: {
          url: loginURL,
          method: "POST",
          namespace: "58"
        },
        logout: {
          url: logoutURL
        }
      });
      return R;
    });
  module
    .factory("HelperService", function(ngLiferayHttp, ngLiferayAuth) {
      var url = "/?p_p_id=nghelper_WAR_nghelperportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=";
      var R = ngLiferayHttp('', {
        getJournalArticlesJSON: {
          url: url + "getJournalArticlesJSON",
          method: "POST",
          namespace: "nghelper_WAR_nghelperportlet"
        },
        getJournalArticleJSON: {
          url: url + "getJournalArticleJSON",
          method: "POST",
          namespace: "nghelper_WAR_nghelperportlet"
        },
        getThemeDisplayJSON: {
          url: url + "getThemeDisplayJSON",
          method: "POST"
        }
      });
      /* R.configureData = function() {
      var deferred = $q.defer();
      R.getThemeDisplayJSON().then(function(data) {
      ngLiferayAuth.setData(data);
      deferred.resolve(data);
      },
      function(error){
      deferred.reject(error);
      });
      return deferred.promise;
      };
      //run configure data for first time
      R.configureData();*/
      //Init ngLiferayAuth from Liferay
      ngLiferayAuth.setData(Liferay.themeDisplay);
      return R;
    });
  module
    .factory('LanguageService', function(ngLiferayHttp, ngLiferayAuth, HelperService, $q) {
      var cache = {};
      var url = "/language/" + ngLiferayAuth.themeDisplay.languageId + "/",
        R = ngLiferayHttp('', {
          _get: {
            method: "POST"
          }
        });
      R.get = function(key, extraParams) {
        var deferred = $q.defer(),
          val = !extraParams && cache[key];
        if (val) {
          deferred.resolve(val);
        } else {
          var serializeExtraParams = extraParams ? angular.isArray(extraParams) ? extraParams.join("/") : extraParams : "";
          R._get(url + key + "/" + serializeExtraParams, {
            p_auth: ngLiferayAuth.authToken
          }).then(function(val) {
            if (!extraParams) {
              cache[key] = val;
            }
            deferred.resolve(val);
          });
        }
        return deferred.promise;
      };
      return R;
    });
  module
    .factory('ngLiferayAuth', function() {
      var props = ['authToken', 'currentUserId'];
      var propsPrefix = '$lr_ng$';

      function save(storage, name, value) {
        var key = propsPrefix + name;
        if (value === null) {
          value = '';
        }
        storage[key] = value;
      }

      function load(name) {
        var key = propsPrefix + name;
        return localStorage[key] || sessionStorage[key] || null;
      }

      function ngLiferayAuth() {
        var self = this;
        props.forEach(function(name) {
          self[name] = load(name);
        });
        this.rememberMe = undefined;
        this.currentUser = null;
        this.themeDisplay = null;
      }
      ngLiferayAuth.prototype.save = function() {
        var self = this;
        var storage = this.rememberMe ? localStorage : sessionStorage;
        props.forEach(function(name) {
          save(storage, name, self[name]);
        });
      };
      ngLiferayAuth.prototype.setData = function(data) {
        this.currentUser = data.user;
        this.currentUserId = data.user.userId;
        this.authToken = data.authToken;
        delete data.user;
        this.themeDisplay = data;
        this.save();
      };
      ngLiferayAuth.prototype.clearData = function() {
        this.authToken = null;
        this.currentUserId = null;
        this.currentUser = null;
        this.themeDisplay = null;
        this.clearStorage();
      };
      ngLiferayAuth.prototype.clearStorage = function() {
        props.forEach(function(name) {
          save(sessionStorage, name, null);
          save(localStorage, name, null);
        });
      };
      return new ngLiferayAuth();
    });
  module
    .provider("ngLiferayHttp", function ngLiferayHttpProvider() {
      var noop = angular.noop,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy,
        isFunction = angular.isFunction,
        isString = angular.isString;
      this.$get = ['$http', '$q', '$httpParamSerializerJQLike', function($http, $q, $httpParamSerializerJQLike) {
        return function(url, actions) {
          var service = {};
          /**
           * obj has 3 properties
           * 	url -
           * 	method -
           * 	data -
           */
          function doHttpCall(obj) {
            obj.method = obj.method || "GET";
            var deferred = $q.defer();
            //Checking liferay services cmd parameter & stringify it.
            var cmd = obj.data.cmd;
            if (cmd) {
              obj.data.cmd = JSON.stringify(cmd);
            }
            var o = {
              url: obj.url,
              method: obj.method
            };
            if (obj.method.toUpperCase() === "POST") {
              o.data = $httpParamSerializerJQLike(obj.data);
              o.headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
              };
            } else { // for GET requests
              o.params = obj.data;
            }
            $http(o).success(function(data) {
              deferred.resolve(data);
            }).error(function(data) {
              deferred.reject(data);
            });
            return deferred.promise;
          }
          /**
           * action properties:
           * 	url: url to call http
           * 	method: Http method, POST or GET
           * 	params: data or params provided in http call
           */
          forEach(actions, function(action, name) {
            /**
             * action url: will override the url provided
             * data: data provided to http
             */
            service[name] = function(actionURL, data) {
              var u;
              if (isString(actionURL)) {
                u = actionURL;
              } else {
                u = action.url || url;
                data = actionURL;
              }
              var o = {
                url: u,
                method: action.method,
                data: extend({}, action.params, data)
              };
              //change params name if namespace is provided in action
              var ns = action.namespace;
              if (ns) {
                data = {};
                forEach(o.data, function(d, key) {
                  data["_" + ns + "_" + key] = d;
                });
                o.data = data;
              }
              return doHttpCall(o);
            };
          });
          return service;
        };
      }];
    });
})(window, window.angular, window.jQuery, window.Liferay);