"use strict";

var Member = React.createClass({
    displayName: "Member",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        githubid: React.PropTypes.string.isRequired,
        github: React.PropTypes.string.isRequired,
        grade: React.PropTypes.string.isRequired
    },

    render: function render() {
        return React.createElement(
            "li",
            { className: "member" },
            React.createElement("img", { src: "https://avatars2.githubusercontent.com/u/" + this.props.githubid + "?v=3&s=50", className: "member image circle responsive-img" }),
            React.createElement(
                "div",
                { className: "member-wrapper" },
                React.createElement(
                    "span",
                    { className: "member title" },
                    this.props.name
                ),
                React.createElement(
                    "span",
                    { className: "member github" },
                    React.createElement(
                        "a",
                        { href: 'https://github.com/' + this.props.github },
                        '@' + this.props.github
                    )
                ),
                React.createElement(
                    "span",
                    { className: "member grade" },
                    this.props.grade
                )
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
            React.createElement(Member, { name: "ChalkPE (amato17)", github: "ChalkPE", githubid: "9481405", grade: "Team Leader" }),
            React.createElement(Member, { name: "CirclePE (lwh8762)", github: "CirclePE", githubid: "10684388", grade: "" }),
            React.createElement(Member, { name: "cr0sh (ska827)", github: "cr0sh", githubid: "13118114", grade: "" }),
            React.createElement(Member, { name: "Dark (angello10)", github: "angello10", githubid: "9531062", grade: "" }),
            React.createElement(Member, { name: "Khinenw (deu07115)", github: "HelloWorld017", githubid: "3919433", grade: "" }),
            React.createElement(Member, { name: "Khoneki (woni8708)", github: "Khoneki", githubid: "9482404", grade: "" }),
            React.createElement(Member, { name: "SemteulGaram (b_science)", github: "Semteul", githubid: "6727533", grade: "M.K STAFF" }),
            React.createElement(Member, { name: "hm (hmkuak)", github: "HmHmmHm", githubid: "8337568", grade: "M.K STAFF" }),
            React.createElement(Member, { name: "SW승원 (nno88551)", github: "milk0417", githubid: "9590938", grade: "" }),
            React.createElement(Member, { name: "You (cksdid726)", github: "You726", githubid: "5254268", grade: "" }),
            React.createElement(Member, { name: "두두찡 (enenwld80605)", github: "Duduzzing", githubid: "10470392", grade: "" }),
            React.createElement(Member, { name: "멸종위기의 AB형 (ehddnjs9719)", github: "BloodType-AB", githubid: "11348711", grade: "M.K STAFF" }),
            React.createElement(Member, { name: "아포가토맨 (colombia2)", github: "affogatoman", githubid: "10260187", grade: "" }),
            React.createElement(Member, { name: "원본 (jyc0410)", github: "onebone", githubid: "3233503", grade: "M.K STAFF" }),
            React.createElement(Member, { name: "조합자 (twjun0212)", github: "", githubid: "9780129", grade: "" }),
            React.createElement(Member, { name: "하나린 (canghaun)", github: "Hanarin", githubid: "6566972", grade: "M.K STAFF" })
        );
    }
});

ReactDOM.render(React.createElement(MemberList, null), document.getElementById('members-view'));