"use strict";

var Member = React.createClass({
    displayName: "Member",

    propTypes: {
        naver: React.PropTypes.string.isRequired,
        naverId: React.PropTypes.string.isRequired,

        github: React.PropTypes.string,
        githubId: React.PropTypes.string,

        grade: React.PropTypes.string
    },

    render: function render() {
        return React.createElement(
            "div",
            { className: "member chip" },
            React.createElement("img", { src: this.props.githubId ? "https://avatars2.githubusercontent.com/u/" + this.props.githubId + "?v=3&s=50" : "resources/img/mk_icon.png" }),
            React.createElement(
                "span",
                { className: "member title tooltipped", "data-position": "bottom", "data-delay": "50", "data-tooltip": this.props.naverId },
                this.props.naver
            ),
            React.createElement(
                "span",
                { className: "member github" },
                React.createElement(
                    "a",
                    { href: 'https://github.com/' + this.props.githubId },
                    this.props.github && '@' + this.props.github
                )
            ),
            React.createElement(
                "span",
                { className: "member grade light-blue-text text-darken-3" },
                this.props.grade
            )
        );
    }
});

var MemberList = React.createClass({
    displayName: "MemberList",

    render: function render() {
        return React.createElement(
            "ul",
            { className: "members" },
            React.createElement(Member, { naverId: "amato17", github: "ChalkPE", githubId: "9481405", grade: "Leader", naver: "ChalkPE" }),
            React.createElement(Member, { naverId: "lwh8762", github: "CirclePE", githubId: "10684388", grade: "", naver: "Circle" }),
            React.createElement(Member, { naverId: "ska827", github: "cr0sh", githubId: "13118114", grade: "", naver: "Cr0sh" }),
            React.createElement(Member, { naverId: "angello10", github: "angello10", githubId: "9531062", grade: "", naver: "Dark" }),
            React.createElement(Member, { naverId: "deu07115", github: "HelloWorld017", githubId: "3919433", grade: "", naver: "Khinenw" }),
            React.createElement(Member, { naverId: "woni8708", github: "Khoneki", githubId: "9482404", grade: "", naver: "Khoneki" }),
            React.createElement(Member, { naverId: "b_science", github: "Semteul", githubId: "6727533", grade: "Staff", naver: "SemteulGaram" }),
            React.createElement(Member, { naverId: "hmkuak", github: "HmHmmHm", githubId: "8337568", grade: "Staff", naver: "hm" }),
            React.createElement(Member, { naverId: "nno88551", github: "milk0417", githubId: "9590938", grade: "", naver: "SW승원" }),
            React.createElement(Member, { naverId: "cksdid726", github: "You726", githubId: "5254268", grade: "", naver: "You" }),
            React.createElement(Member, { naverId: "enenwld80605", github: "Duduzzing", githubId: "10470392", grade: "", naver: "두두찡" }),
            React.createElement(Member, { naverId: "ehddnjs9719", github: "BloodType-AB", githubId: "11348711", grade: "Staff", naver: "멸종위기의 AB형" }),
            React.createElement(Member, { naverId: "jyc0410", github: "onebone", githubId: "3233503", grade: "Staff", naver: "원본" }),
            React.createElement(Member, { naverId: "twjun0212", github: "", githubId: "", grade: "", naver: "조합자" }),
            React.createElement(Member, { naverId: "canghaun", github: "Hanarin", githubId: "6566972", grade: "Staff", naver: "하나린" })
        );
    }
});

ReactDOM.render(React.createElement(MemberList, null), document.getElementById('members-view'));